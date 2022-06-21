import {
  LoginContainer,
  LoginContent,
  CTA,
  CTALogoOne,
  CTAlogoTwo,
  BgImage,
  Description,
  SignUp,
} from "./landing-page.styles";

import CTALogoOneImage from "../../assets/cta-logo-one.svg";
import CTALogoTwoImage from "../../assets/cta-logo-two.png";
const LandingPage = (props) => {
  return (
    <LoginContainer>
      <LoginContent>
        <CTA>
          <CTALogoOne src={CTALogoOneImage} />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 06/18/2022, the price of Disney+
            and the Disney Bundle will increase by $1.
          </Description>
          <CTAlogoTwo src={CTALogoTwoImage} />
        </CTA>
        <BgImage />
      </LoginContent>
    </LoginContainer>
  );
};

export default LandingPage;
