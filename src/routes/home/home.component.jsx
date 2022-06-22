import ImgCarousel from "../../components/img-carousel/img-carousel.component";
import Recommends from "../../components/recommends/recommends.component";
import Viewers from "../../components/viewers/viewers.component";
import "./home.styles";
import { HomeContainer } from "./home.styles";
import { useEffect } from "react";
import { getMoviesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setMovies } from "../../store/movies/movie.slice";
import New from "../../components/new/new.component";
import Originals from "../../components/originals/originals.component";
import Trending from "../../components/trending/trending.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { selectUserDetails } from "../../store/user/user.slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserDetails);

  useEffect(() => {
    if (!user) navigate("/");
    getMoviesAndDocuments("movies").then((movieData) => {
      dispatch(setMovies(movieData));
    });
  }, []);

  return (
    <HomeContainer>
      <ImgCarousel />
      <Viewers />
      <Recommends />
      <New />
      <Originals />
      <Trending />
    </HomeContainer>
  );
};

export default Home;
