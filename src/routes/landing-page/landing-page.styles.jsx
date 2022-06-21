import styled from "styled-components";
import login from "../../assets/login-background.jpg";

export const LoginContainer = styled.section`
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

export const LoginContent = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

export const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  /* align-items: center; */
`;

export const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("${login}");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

export const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  align-self: center;

`;

export const SignUp = styled.a`
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 18px;
    text-transform: uppercase;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    padding: 16.5px 0;
    border-radius: 4px;
    border: 1px solid transparent;
    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }

`;

export const Description = styled.p`
    color : hsla(0,0%,95.3%,1);
    font-size: 14px;
    margin: 10px 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

export const CTAlogoTwo = styled.img`
max-width: 600px;
display: inline-block;
vertical-align: bottom;
align-self: center;
margin-bottom: 20px;
width: 100%;
`;
