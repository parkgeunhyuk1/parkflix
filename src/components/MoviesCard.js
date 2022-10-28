import React from "react";
import "../style/moviescard.css";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MoviesCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  
  return (
    <div
      onClick={() => {
        navigate(`/movies/${item?.id}`);
      }}
      id="card2"
      className="card3"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces${item?.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h2>{item?.title}</h2>
        <div>
          {item?.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList?.find((item) => item?.id == id)?.name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item?.vote_average}</span>
          <span>{item?.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
