import React, { useState, useEffect } from 'react';

const TimerComp = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const IntervalId = setInterval(()=>{
            console.log("Set Interval Executed")
            setSeconds(prevseconds => prevseconds + 1);
        }, 1000);
    
        return () => {
            // on commenting timercomp in app.jsx in console tab we can see this cl is executed
            console.log("Set Interval Stopped")
            clearInterval(IntervalId);
        }
    }, [])
    // runs on first render only
    
    return (
        <div>
            <h1>Seconds : {seconds}</h1>
        </div>
    )
}
export default TimerComp
