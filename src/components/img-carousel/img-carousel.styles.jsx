import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 1;
    }
  }

  ul li button::before {
    font-size: 10px;
    color: rgb(150, 158, 171);
  }

  li.active button::before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -60px;
  }
  .slick-next {
    right: -60px;
  }
`;

export const ImageLink = styled(Link)``;

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  ${ImageLink} {
    display: block;
    border-radius: 4px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    padding: 8px;
    
    img {
      height: 100%;
      width: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition: 200ms;
    }
  }
`;
