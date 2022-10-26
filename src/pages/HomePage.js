import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import '../style/homepage.css'
const HomePage = () => {
  const dispatch=useDispatch()
  const {popularMovies,topRatedMovies,upcomingMovies}=useSelector(state=>state.movie)
  console.log('home',popularMovies)

  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  return (
    <div className='homePage'>
     {popularMovies.results &&<Banner movie={popularMovies.results[0]}/> } 
    </div>
  )
}

export default HomePage
