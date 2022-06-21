import ImgCarousel from "../../components/img-carousel/img-carousel.component";
import Recommends from "../../components/recommends/recommends.component";
import Viewers from "../../components/viewers/viewers.component";
import "./home.styles";
import { HomeContainer } from "./home.styles";
import { useEffect } from "react";
import { getMoviesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, selectRecommended } from "../../store/movies/movie.slice";
import New from "../../components/new/new.component";
import Originals from "../../components/originals/originals.component";
import Trending from "../../components/trending/trending.component";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMoviesAndDocuments("movies").then((movieData) => {
      dispatch(setMovies(movieData));
    });
  }, []);

  const recommended = useSelector(selectRecommended);
  console.log(recommended);

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
