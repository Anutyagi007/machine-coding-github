import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(()=> {
      setProgress((prog) => prog < 100 ? prog + 10 : prog);
    }, 2000);
    return () => {
      clearInterval(interval);
    }
  }, [progress])
  return (
    <div >
        <div className='outer-div' >
            <div className='inner-div' style={{width: `${progress}%`}}>{progress}%</div>
        </div>
        <div>
          <button onClick={()=>setProgress((prev) => prev > 0 ? prev - 10 : prev)}>-</button>
          <button onClick={()=>setProgress((prev) => prev < 100 ? prev + 10 : prev)}>+</button>
        </div>
    </div>
  )
}

export default ProgressBar