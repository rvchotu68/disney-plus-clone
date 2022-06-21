import { selectTrending } from "../../store/movies/movie.slice";
import { useSelector } from "react-redux/es/exports";
import MovieComponent from "../movie-component/movie-component.component";

const Trending = () => {
  const trending = useSelector(selectTrending);

  return (
    <>{trending && <MovieComponent movies={trending} text="Trending" />}</>
  );
};

export default Trending;
