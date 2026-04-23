import React from 'react'
import './Calender.css'
import Events from './Events';

const Calender = () => {

  const slots = Array.from({length: 24}, (_, index) => index);
  console.log(slots)
  return (
    <div className='calender'>
      <div className='line'></div>
      {
        slots.map((slot, index) => {
          return <div className='slot' key={index}>{slot}:00</div>
        })
      }
      <Events/>
    </div>
  )
}

export default Calender