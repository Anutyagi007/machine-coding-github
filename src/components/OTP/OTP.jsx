import React, { useEffect, useRef, useState } from 'react'
import './Otp.css';
const OTP = () => {
  const otpLength = 6;
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const ref = useRef([]);
  useEffect(()=>{
    ref.current[0].focus();
  }, []);
  const handleKeyDown = (e, index) => {
    if(e.key === 'Backspace') {
      const newOtps = [...otp];
      newOtps[index] = '';
      ref.current[index - 1]?.focus();
      setOtp(newOtps);
      return;
    }
    if(e.key === 'ArrowLeft') {
      ref.current[index - 1]?.focus();
      return;
    }
    if(e.key === 'ArrowRight') {
      ref.current[index + 1]?.focus();
      return;
    }
    if(isNaN(e.key) || e.key === ' ') return;
    const newOtps = [...otp];
    newOtps[index] = e.key;
    ref.current[index + 1]?.focus();
    setOtp(newOtps);
  }
  console.log(ref.current);
  return (
    <div>
      <h2>OTP Component</h2>
      {
        otp.map((value, index) => (
          <input 
            key={index} 
            type="text"
            maxLength={1}
            value={value}
            ref={(el) => (ref.current[index] = el)}
            onChange={()=>{}}
            onKeyDown={(e)=>handleKeyDown(e,index)}
          />
        ))
      }
    </div>
  )
}

export default OTP