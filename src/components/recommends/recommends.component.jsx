import { selectRecommended } from "../../store/movies/movie.slice";
import { useSelector } from "react-redux";
import MovieComponent from "../movie-component/movie-component.component";
const Recommends = () => {
  const recommended = useSelector(selectRecommended);
  return (
    <>
      {recommended && (
        <MovieComponent
          movies={recommended}
          text={"Recommended for you"}
        />
      )}
    </>
  );
};

export default Recommends;
