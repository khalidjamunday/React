import { useState, useRef } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  // StopWatch...
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current =  setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);;
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    // Stop krdiya toh intial state m le aao i.e. null
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  const [count, setCount] = useState(0)
  let val = 1; // this varb. will not persist it's value kyuki har re-render pe poora code wapis chalega aur val again intialise hoga 1 pe
  // to overcome this drawback we use useRef() hook
  // -> state var. change toh re render hota h
  // -> useRef var. change toh NO re render
  // -> A.)
  let val1 = useRef(1); // it returns an obj. jisme ek current field hoti h val1.current jisme hamari value hoti h
  // -> B.)
  let btnref = useRef();

  function handleClick(){
    val = val + 1;
    val1.current = val1.current + 1;
    console.log("Value of Val: ", val);
    console.log("Value of Val1: ", val1);
    setCount(count + 1);
  }

  function changeColor(){
    console.log(btnref);
    // btnref object ko consolelog karwa ke uski properties dekh lo
    btnref.current.style.backgroundColor = 'red';
  }
  // it runs on every render
  useEffect(() => {
    console.log("main firse render hua hu")
  })

  // useRef() hook :-
  // 2 use Cases
  // A.) used as a variable which persist it's value across re renders
  // B.) used to directly access dom elements --> create refernce and link it to element
  return (
    // <div>

    //   <button onClick={handleClick} ref={btnref}>
    //     Increment
    //   </button>
    //   <br />

    //   <button onClick={changeColor}>
    //     Change Color of 1st button
    //   </button>
    //   <br />

    //   <div>
    //     Count : {count}
    //   </div>

    // </div>

    // StopWatch Program...
    <div>
      <h1>StopWatch : {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /><br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /><br />

      <button onClick={resetTimer}>
        Reset
      </button>


    </div>
  )
}

export default App
