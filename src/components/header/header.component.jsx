import {
  HeaderContainer,
  NavContainer,
  UserAvatar,
  SignOut,
  DropDown,
} from "./header.styles";
import Logo from "../logo/logo.component";
import NavMenu from "../nav-menu/nav-menu.component";
import Login from "../login/login.component";
import { useSelector,useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {
  selectUserDetails,
  selectUserPhoto,
  selectUserDisplayName,
  signOutSuccess
} from "../../store/user/user.slice";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Header = (props) => {
  const currentUser = useSelector(selectUserDetails);
  const userImage = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserDisplayName);
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const signOutHandler = () => {
      signOutUser();
      dispatch(signOutSuccess());
      navigate("/");
  }

  return (
    <HeaderContainer>
      <Logo />
      {currentUser ? (
        <NavContainer>
          <NavMenu />
          <SignOut>
            <UserAvatar src={userImage} alt={userName} />
            <DropDown onClick={signOutHandler}>Sign Out</DropDown>
          </SignOut>
        </NavContainer>
      ) : (
        <Login />
      )}
    </HeaderContainer>
  );
};

export default Header;
