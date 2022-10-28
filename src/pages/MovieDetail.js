import React, { useEffect, useState } from "react";
import api from "../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";
import { useParams } from "react-router-dom";
import "../style/moviedetail.css";
import { Badge } from "react-bootstrap";
import Review from "../components/Review";
import RelatedMovies from "../components/RelatedMovies";
import TrailerModal from "../components/TrailerModal";


const MovieDetail = () => {
  let { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieData, setMovieData] = useState(null);
  const [reviewData,setReviewData]=useState(null);
  const { genreList } = useSelector((state) => state.movie);
  const [page,setPage]=useState(1)
  const getMoivesDetail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let res = await fetch(url);
    let data = await res.json();
    setMovieData(data);
  };
  const getReview=async()=>{
    let url= `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    let res= await fetch(url);
    let data= await res.json();
    setReviewData(data)
  }
  useEffect(() => {
    getMoivesDetail();
    getReview()
  }, [id]);
  console.log('영화',movieData);
  console.log('리뷰',reviewData?.id)
  return (
    <div className="pageContainer">
    <div className="detailpage">
      <div
        className="imgbox"
        style={{
          backgroundImage:
            "url(" +
            ` https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieData?.poster_path}` +
            ")",
        }}
      ></div>
      <div className="moviedetail">
        <div className="badgeContainer">
        {movieData?.genres.map((id) => (
          <Badge className="badge1" bg="danger">{id.name}</Badge>
        ))}
        </div>
        <div className="title">
          <h1>{movieData?.title}</h1>
          <h4>{movieData?.tagline}</h4>
          <div className="others">
            <div className="point">
              <h6>평점:{movieData?.vote_average}</h6>
            </div>
            <div className="popularity">
              <h6>인기도:{movieData?.popularity}</h6>
            </div>
            <div className="under18">
              {
                movieData?.adult===false?
                null
                :
                <h6>청불</h6>
              }
            </div>
            
          </div>
          <div className="overview">
          <p>{movieData?.overview}</p>
          </div>
          <div className="detailBadgeContainer">
          <div >
              <Badge className="budget" bg="danger">Budget</Badge>${movieData?.budget}
          </div>
          <div >
          <Badge className="budget" bg="danger">Revenue</Badge>${movieData?.revenue}
          </div>
          <div >
          <Badge className="budget" bg="danger">Release Day</Badge>{movieData?.release_date}
          </div>
          <div >
          <Badge className="budget" bg="danger">Time</Badge>{movieData?.runtime}min
          </div>
          </div>
          <TrailerModal movieData={movieData}/>
          
          
         
        </div>
      </div>
      
    </div>
    <div className="review">
      <div className="buttonContainer">
        <button  onClick={()=>{
          setPage(1)
        }} className="reviewButton"><h3>REVIEWS({reviewData?.results.length})</h3></button>
        <button  onClick={()=>{
          setPage(2)
        }} className="relatedMovies"><h3>RELATED MOVIES</h3></button>
      </div>
      {
        page===1 ?
        <Review reviewData={reviewData}/>
        :
        <RelatedMovies reviewData={reviewData}/>
      }
    </div>
    </div>
  );
};

export default MovieDetail;
