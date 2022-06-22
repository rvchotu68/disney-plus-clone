import { Wrap, MovieContainer, Content } from "./movie-component.styles";
import { Link } from "react-router-dom";

const MovieComponent = (props) => {
  const { movies, text } = props;
//   console.log(props);
  return (
    <MovieContainer>
      <h3>{text}</h3>
      <Content>
        {movies.map((movie) => {
          const { cardImg, title, id } = movie;
          return (
            <Wrap key={id}>
              <Link to={"/detail/" + id}>
                <img src={cardImg} alt={title} />
              </Link>
            </Wrap>
          );
        })}
      </Content>
    </MovieContainer>

    // <Wrap>
    //   <Link to="/">
    //     <img src={cardImg} alt={title} />
    //   </Link>
    // </Wrap>
  );
};

export default MovieComponent;
