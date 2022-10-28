import React, { useState } from 'react'
import '../style/sort.css'
const Sort = ({data}) => {
    const [show,setShow]=useState(1)
    console.log('이제됨?',data?.results)
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
            data?.results.map((item)=>item?.popularity)
            
        }}>인기도순</h4>
      </div>
      <div className='point'>
        <h4>평점순</h4>
      </div>
      <div className='release'>
        <h4>개봉일순</h4>
      </div>
      </>:
      null
      }
      
    </div>
  )
}

export default Sort
