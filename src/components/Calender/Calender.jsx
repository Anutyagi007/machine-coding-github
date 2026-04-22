import React from 'react'

const Calender = () => {
  const slots = Array.from({length: 24}, (_, index) => index);
  console.log(slots)
  return (
    <div>
      {slots}:00
    </div>
  )
}

export default Calender