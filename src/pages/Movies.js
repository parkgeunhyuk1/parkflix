import React, { useEffect, useState } from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import '../style/movies.css'
import MoviesCard from '../components/MoviesCard';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
const Movies = () => {
  
  const dispatch=useDispatch()
  const {popularMovies,topRatedMovies,upcomingMovies, loading}=useSelector(state=>state.movie)
  const[limit,setLimit]=useState(4);
  const [page,setPage]=useState(1);
  const offset= (page-1)*limit;
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
    <div className='movies'>
      <div className='sorted'>
        <div className='sortchart'>
          <Sort data={popularMovies}/>
          
        </div>
      </div>
      <div className='movieCardComponent'>
        {popularMovies?.results.slice(offset, offset+limit).map((item)=>(
          <MoviesCard id='moviecard' item={item} />
        ))}
        <div className='pagebox'>
         <Pagination
          total={popularMovies?.results.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
        </div>
      </div>
    </div>
  )
}

export default Movies
