import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "../style/moviedetail.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const RelatedMovies = ({ reviewData }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [recommendedMovie, setRecommendedMovie] = useState(null);
  const getRecommend = async () => {
    let url = `https://api.themoviedb.org/3/movie/${reviewData?.id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
    let res = await fetch(url);
    let data = await res.json();
    setRecommendedMovie(data);
  };
  useEffect(() => {
    getRecommend();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slide">
      <Carousel id="possible" responsive={responsive}>
      {!!recommendedMovie&& recommendedMovie?.results.map((item) => (
        <MovieCard  item={item} />
      ))}
      </Carousel>
    </div>
  );
};

export default RelatedMovies;
