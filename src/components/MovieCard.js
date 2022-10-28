import React from "react";
import "../style/movieCard.css";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);
  console.log("이거줄거임", item);
  console.log('이건됌?',item?.genre_ids.name)
  return (
    <div
      onClick={() => {
        navigate(`/movies/${item?.id}`);
      }}
      id="card1"
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item?.poster_path}` +
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

export default MovieCard;
