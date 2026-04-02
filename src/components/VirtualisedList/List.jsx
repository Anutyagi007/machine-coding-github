import React, { useState } from 'react'

const List = ({ height, width, itemHeight, items }) => {
    const visibleCount = Math.ceil(height / itemHeight);
    console.log(visibleCount);
    const [indicies, setIndicies] = useState([0, visibleCount]);
    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = startIndex + visibleCount;
        setIndicies([startIndex, endIndex]);
    }
  return (
    <div className='container' style={{ height, width, border: '1px solid black', overflow: 'auto' }} onScroll={(e) => handleScroll(e)}>
        <div style={{height: items.length*itemHeight , position: 'relative'}} >
          {items.slice(indicies[0], indicies[1]).map((item, index) => (
            <div key={index} style={{ height: itemHeight, borderBottom: '1px solid #ccc', position: 'absolute', top: (indicies[0] + index) * itemHeight, width: '100%' }}>
              {item}
            </div>
          ))}
        </div>
    </div>
  )
}

export default List