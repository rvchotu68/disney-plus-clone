import { LogoContainer } from "./logo.styles";
import logoImg from "../../assets/logo.svg";
const Logo = () => {
  return (
    <LogoContainer>
      <img src={logoImg} alt="Disney+" />
    </LogoContainer>
  );
};

export default Logo;
