import { selectNew } from "../../store/movies/movie.slice";
import { useSelector } from "react-redux/es/exports";

import MovieComponent from "../movie-component/movie-component.component";

const New = () => {
  const newMovies = useSelector(selectNew);

  return (
    <>
      {newMovies && <MovieComponent movies={newMovies} text="New on Disney+" />}
    </>
  );
};

export default New;
