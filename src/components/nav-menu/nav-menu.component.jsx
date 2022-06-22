import styled from "styled-components";
import { Link } from "react-router-dom";
import Home from "../../assets/home-icon.svg";
import Search from "../../assets/search-icon.svg";
import WatchList from "../../assets/watchlist-icon.svg";
import Original from "../../assets/original-icon.svg";
import Movies from "../../assets/movie-icon.svg";
import Series from "../../assets/series-icon.svg";

const NavMenu = () => {
  return (
    <Container>
      <NavMenuLink to="/home">
        <img src={Home} alt="Home" />
        <span>Home</span>
      </NavMenuLink>
      <NavMenuLink to="/search">
        <img src={Search} alt="Search" />
        <span>Search</span>
      </NavMenuLink>
      <NavMenuLink to="/watchList">
        <img src={WatchList} alt="WatchList" />
        <span>watchList</span>
      </NavMenuLink>
      <NavMenuLink to="/originals">
        <img src={Original} alt="Originals" />
        <span>Originals</span>
      </NavMenuLink>
      <NavMenuLink to="/movies">
        <img src={Movies} alt="Movies" />
        <span>Movies</span>
      </NavMenuLink>
      <NavMenuLink to="/series">
        <img src={Series} alt="series" />
        <span>Series</span>
      </NavMenuLink>
    </Container>
  );
};

const NavMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }

  span {
    margin-left: 5px;
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    /* line-height: 1; */
    white-space: nowrap;
    position: relative;
    &::before {
      content: "";
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      position: absolute;
      bottom: -6px;
      height: 2px;
      left: 0;
      right: 0;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      width: auto;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    span::before {
      transform: scaleX(1);
      opacity: 1 !important;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60%;
`;

export default NavMenu;
