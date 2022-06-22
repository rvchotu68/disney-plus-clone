import styled from "styled-components";
import { signInWithGooglePop } from "../../utils/firebase/firebase.utils";
import { signInSuccess } from "../../store/user/user.slice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginHandler = async () => {
    try{
        const { user } = await signInWithGooglePop();
    if(!user) return;
    dispatch(signInSuccess(user));
    navigate("/home");
    }
    catch(err){
        alert(err);
    }
    
  };

  return <LoginComponent onClick={loginHandler}>Login</LoginComponent>;
};

const LoginComponent = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 6px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  font-size: 20px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;

export default Login;
