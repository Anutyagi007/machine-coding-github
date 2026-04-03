import React, { useState } from 'react'
import './StarRating.css'

const StarRating = () => {
    const [rating, setRating] = useState(0);
  return (
    <div>
        <h2>Star Rating Component</h2>
        {
            [1,2,3,4,5].map((_, index) => {
                return <span className={`${index < rating ? 'star' : ''}`} key={index} onClick={()=>setRating(index+1)}>★</span>
            })
        }
        <p>Rating: {rating}</p>
    </div>
  )
}

export default StarRating