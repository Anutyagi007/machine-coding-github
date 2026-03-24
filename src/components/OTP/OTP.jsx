import React, { useState } from 'react'

const OTP = () => {
  const otpLength = 6;
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  return (
    <div>
      <h2>OTP Component</h2>
      {
        otp.map((_, index) => (
          <input 
            key={index} 
            type="text"
          />
        ))

      }
    </div>
  )
}

export default OTP