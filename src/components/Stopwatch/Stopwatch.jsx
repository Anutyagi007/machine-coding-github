import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState({
        hours: '',
        minutes: '',
        seconds: ''
    });
    const [isStart, setIsStart] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(isNaN(value)) return;
        setTime((prev) => ({
            ...prev,
            [name]: value
        }))
        if(name === 'seconds' && value > 59) {
            const secValue = value % 60;
            const minValue = Math.floor(value/60);
            console.log(secValue, minValue);
            setTime((prev) => ({
                ...prev,
                minutes: String(Number(prev.minutes) + minValue).padStart(2, '0'),
                seconds: String(secValue).padStart(2, '0')
            }))
        }

        if(name === 'minutes' && value > 59) {
            const minValue = value % 60;
            const hourValue = Math.floor(value/60);
            console.log(minValue, hourValue);
            setTime((prev) => ({
                ...prev,
                hours: String(Number(prev.hours) + hourValue).padStart(2, '0'),
                minutes: String(minValue).padStart(2, '0')
            }))
        }
        if(name === 'hours' && value > 23) {
            setTime((prev) =>({
                ...prev,
                hours: 23,
            }))
        }
    }

    const handleStart = () => {
        if(time.hours === '' && time.minutes === '' && time.seconds === '') {
            return;
        }
        setIsStart(!isStart);
    }
    const handleReset = () => {
        setIsStart(false);
        setTime({
            hours: '',
            minutes: '',
            seconds: ''
        })
    }
    useEffect(()=> {
        if(isStart) {
            const interval = setInterval(() => {
                setTime((prevTime) => {
                    const copyTime = {...prevTime};
                    copyTime.seconds--;
                    if(copyTime.seconds < 0) {
                        copyTime.seconds = 59;
                        copyTime.minutes = String(Number(copyTime.minutes) - 1).padStart(2, '0');
                    }
                    if(copyTime.minutes < 0) {
                        copyTime.minutes = 59;
                        copyTime.hours = String(Number(copyTime.hours) - 1).padStart(2, '0');
                    }
                    return copyTime;
                })
            }, 1000);
            return () => clearInterval(interval);
        }
    })
  return (
    <div>
        <input type="text" name="hours" placeholder='HH' value={time.hours} onChange={(e)=> handleChange(e)}/>:
        <input type="text" name="minutes" placeholder='MM' value={time.minutes} onChange={(e)=> handleChange(e)}/>:
        <input type="text" name="seconds" placeholder='SS' value={time.seconds} onChange={(e)=> handleChange(e)}/>
        <button onClick={handleStart}>{isStart ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch;