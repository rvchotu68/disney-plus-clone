import { Carousel,Wrap,ImageLink } from "./img-carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Badag from "../../assets/slider-badag.jpg";
import Badging from "../../assets/slider-badging.jpg";
import Scale from "../../assets/slider-scale.jpg";
import Scales from "../../assets/slider-scales.jpg";
import {Link} from "react-router-dom";


const ImgCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Carousel {...settings}>
        <Wrap>
            <ImageLink to="">
            <img src={Badag}  alt="badag"/>
            </ImageLink>
        </Wrap>
        <Wrap>
            <ImageLink to="">
            <img  src={Badging} alt="Badging"/>
            </ImageLink>
        </Wrap>
        <Wrap>
            <ImageLink to="">
            <img src={Scale} alt="Scale"/>
            </ImageLink>
        </Wrap>
        <Wrap>
            <ImageLink to="">
            <img src={Scales} alt="Scales"/>
            </ImageLink>
        </Wrap>
      </Carousel>
    </>
  );
};

export default ImgCarousel;
