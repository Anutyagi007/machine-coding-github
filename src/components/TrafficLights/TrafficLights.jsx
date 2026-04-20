import React, { useEffect, useState } from 'react'
import './TrafficLights.css';

const config = [
  {
    id: 1,
    color: 'red',
  },
  {
    id:2,
    color: 'yellow',
  },
  {
    id:3,
    color: 'green',
  }
]
const TrafficLights = () => {
  const [currentCircle, setCurrentCircle] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCircle((prev) => (prev === config.length ? 1 : prev + 1));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className='circle-container'>
        {config.map((item) => {
          return (
            <div
              className='circle'
              key={item.id}
              style={{ backgroundColor: currentCircle === item.id ? item.color : 'gray' }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default TrafficLights