import {
  DetailContainer,
  BackgroundImg,
  ImgTitle,
  ControlMeta,
  Controls,
  Player,
  Trailer,
  SubTitle,
  Description,
  AddList,
  GroupWatch,
} from "./detail.styles";

import IconBlack from "../../assets/play-icon-black.png";
import IconWhite from "../../assets/play-icon-white.png";
import IconGroupWatch from "../../assets/group-icon.png";
import { useParams } from "react-router-dom";
import {
  selectRecommended,
  selectOriginals,
  selectTrending,
  selectNew,
} from "../../store/movies/movie.slice";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { selectUserDetails } from "../../store/user/user.slice";
import { useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const user = useSelector(selectUserDetails);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  const recommend = useSelector(selectRecommended);
  const originals = useSelector(selectOriginals);
  const newMovies = useSelector(selectNew);
  const trending = useSelector(selectTrending);

  const movieList = [...recommend, ...originals, ...newMovies, ...trending];

  const movie = movieList.filter((movie) => movie.id === Number(id))[0];

    const {
      backgroundImg: backgroundImage,
      titleImg,
      description,
      subTitle,
      title,
    } = movie;

  return (
    <>
      {movie && (
        <DetailContainer>
          <BackgroundImg>
            <img src={backgroundImage} alt={title} />
          </BackgroundImg>
          <ImgTitle>
            <img src={titleImg} alt={title} />
          </ImgTitle>
          <ControlMeta>
            <Controls>
              <Player>
                <img src={IconBlack} alt="" />
                <span>Play</span>
              </Player>
              <Trailer>
                <img src={IconWhite} alt="" />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src={IconGroupWatch} alt="" />
                </div>
              </GroupWatch>
            </Controls>
            <SubTitle>{subTitle}</SubTitle>
            <Description>{description}</Description>
          </ControlMeta>
        </DetailContainer>
      )}
    </>
  );
};

export default Details;
