import { ViewerContainer, Wrap } from "./viewers.styles";
import Disney from "../../assets/viewers-disney.png";
import Marvel from "../../assets/viewers-marvel.png";
import National from "../../assets/viewers-national.png";
import Pixar from "../../assets/viewers-pixar.png";
import StarWars from "../../assets/viewers-starwars.png";
import DisneyVideo from "../../assets/videos/1564674844-disney.mp4";
import MarvelVideo from "../../assets/videos/1564676115-marvel.mp4";
import NationalVideo from "../../assets/videos/1564676296-national-geographic.mp4";
import PixarVideo from "../../assets/videos/1564676714-pixar.mp4";
import StarWarVideo from "../../assets/videos/1608229455-star-wars.mp4";


const Viewers = () => {
  return (
    <ViewerContainer>
      <Wrap>
        <img src={Disney} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="1564674844-disney.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src={Marvel} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={MarvelVideo} type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src={Pixar} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={PixarVideo} type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src={StarWars} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={StarWarVideo} type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src={National} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src={NationalVideo} type="video/mp4"/>
        </video>
      </Wrap>
    </ViewerContainer>
  );
};

export default Viewers;
