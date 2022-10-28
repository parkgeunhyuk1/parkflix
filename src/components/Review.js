import React, { useState } from 'react'
import "../style/moviedetail.css";
import Pagination from './Pagination';
const Review = ({reviewData}) => {
    
    const[limit,setLimit]=useState(3);
    const [page,setPage]=useState(1);
    const offset= (page-1)*limit;
    
  return (
    <div className='reviewPage'>
     
      {reviewData?.results.slice(offset, offset+limit).map((item)=><span className='textspan'>ID:{item?.author+'\n'+item?.content}</span>)}
      <Pagination
          total={reviewData?.results.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
    </div>
  )
}

export default Review
