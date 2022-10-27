import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import '../style/homepage.css'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";
const HomePage = () => {
  const dispatch=useDispatch()
  const {popularMovies,topRatedMovies,upcomingMovies, loading}=useSelector(state=>state.movie)
  

  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  if(loading){
    return <ClipLoader
    color='red'
    loading={loading}
    size={150}
  />
  }
  return (
    <div className='homePage'>
     <Banner movie={popularMovies.results[0]}/> 
     <h1>Popular Movies</h1> 
     <MovieSlide movies={popularMovies}/>
     <h1>Top Rated Movies</h1>
     <MovieSlide movies={topRatedMovies}/>
     <h1>Upcoming Movies</h1>
     <MovieSlide movies={upcomingMovies}/>
    </div>
  )
}

export default HomePage
