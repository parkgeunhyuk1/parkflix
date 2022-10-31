import React, { useState } from 'react'

import '../style/sort.css'
const Sort = ({sortpopularMovies, setSortPopularMovies}) => {
  
    const [show,setShow]=useState(1)
  const sortByPoint=()=>{
    setSortPopularMovies([...sortpopularMovies]?.sort((a,b)=>b.vote_average-a.vote_average))
  }
  const sortByPopulartiry=()=>{
    setSortPopularMovies([...sortpopularMovies]?.sort((a,b)=>b.popularity-a.popularity))
  }
  const sortByDate=()=>{
    setSortPopularMovies([...sortpopularMovies]?.sort((a,b)=>new Date(b.release_date)-new Date(a.release_date)))
  }
    !!sortpopularMovies&& console.log('자',sortpopularMovies)
  return (
    <div className='sortbox'>
      <div onClick={()=>{
        setShow(2)
      }} className='sorthead'>
        <h3>정렬하기</h3>
      </div>
      {
        show===2?
        <>
        <div className='popular'>
        <h4 onClick={()=>{   
          sortByPopulartiry()
          console.log('ㅁㄴㅇ',sortpopularMovies)
        }}>인기도순</h4>
      </div>
      <div className='point'>
        <h4 onClick={()=>{
          sortByPoint()
        }}>평점순</h4>
      </div>
      <div className='release'>
        <h4 onClick={()=>{
          sortByDate()
        }}>개봉일순</h4>
      </div>
      </>:
      null
      }
      
    </div>
  )
}

export default Sort
