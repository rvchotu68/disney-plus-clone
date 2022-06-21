import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
  letter-spacing: 3px;
`;

export const NavContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
`;

export const UserAvatar = styled.img`
  height: 100%;
  border-radius: 50%;
  width: 100%;
`;

export const DropDown = styled.span`
  position: absolute;
  left: -30px;
  top: 55px;
  display: inline-block;
  width: 80px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  padding: 10px;
  font-size: 14px;
  box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
  letter-spacing: 3px;
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${DropDown} {
      opacity: 1;
    }
  }
`;
