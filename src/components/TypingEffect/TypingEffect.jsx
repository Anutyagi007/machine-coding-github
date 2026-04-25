import React, {useState, useEffect, useRef} from 'react'

const TypingEffect = () => {
    const text = "I am a frontend Developer."
    const delay = 50;
    const [displayedText, setDisplayedText] = useState(text);
    const velocityRef = useRef({speed: 1, endIndex: 0})
    useEffect (() => {
        const intervalId =setInterval(() => {
            if(velocityRef.current.endIndex === text.length) {
                velocityRef.current.speed = -1;
            } else if(velocityRef.current.endIndex === 0) {
                velocityRef.current.speed = 1;
            }
            velocityRef.current.endIndex += velocityRef.current.speed;
            setDisplayedText(text.slice(0, velocityRef.current.endIndex));
        }, delay)
        return () => {
            clearInterval(intervalId);
        }
    }, [displayedText])
  return (
    <div>
        {displayedText}|
    </div>
  )
}

export default TypingEffect