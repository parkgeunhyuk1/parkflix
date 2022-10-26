import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch } from 'react-redux'
const HomePage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  return (
    <div>
      homepage
    </div>
  )
}

export default HomePage
