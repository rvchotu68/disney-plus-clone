import { selectOriginals } from "../../store/movies/movie.slice";
import { useSelector } from "react-redux/es/exports";
import MovieComponent from "../movie-component/movie-component.component";

const Originals = () => {
  const originals = useSelector(selectOriginals);

  return (
    <>{originals && <MovieComponent movies={originals} text="Originals" />}</>
  );
};

export default Originals;
