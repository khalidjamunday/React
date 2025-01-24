import React from 'react'
import "./Counter.css"
import { useState } from 'react'
const Counter = () => {
    // [state varb, state fx] useState(initalval)
    // setCount(state varb + 1) updates state varb use of state fx
    const [count, setCount] = useState(0);
  return (
    <div className='counterContainer'>
        <p id='para'>You have clicked {count} times</p>
        {/* here using state variable onclicking btn fx run and increments count*/}
        {/* yhi kaam dom so krne m tedious task this is adv of reactt */}
        <button id='btn' onClick={()=>{setCount(count+1)}}>Click Me!!</button>
    </div>
  )
}

export default Counter