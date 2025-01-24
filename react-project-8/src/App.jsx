import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import LoggerComp from './components/LoggerComp';
import TimerComp from './components/TimerComp';

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // Always use it on top of the component (mtlb shurwat m hi before return)

  // first -> side-eff function (aap side-eff ke roop m kya action perform krna chahte ho ex-> calling an api)
  // second -> it's ca clean-up function (koi comp. UI se hat gya i.e. UNMOUNT hogya uska particular event listner  hatne ke kaam wo cleaning up ka kaam yha hota h ) SEE VAR. 5 
  // third -> comma septd dependency list we write some entites jiske basis pe sideeffect run hota h (unn entites ke updation pe sideeffect run hoga)

  // there r 4 var's of using useEff
  // VAR. 1 runs on every render(refrest and re render diff component re render hua jaisa tha pe ui m counting re render hui)
  // React re-renders the Counter component to reflect the new state.
  // Render hone se just pehle it run's

  // useEffect(()=>{
  //   alert("I will run on each render")
  // })

  // VAR 2: RUN'S ON FIRST RENDER
  // useEffect(() => {
  //   alert("I will run on only 1st render");
  // }, [])

  // VAR 3: RUNS AFTER COUNT GET'S UPDATED OR ANY OTHER DEPENDECY
  // starting m kyu chala ? bcoz we passed intial value it is also dealt as an updation useState(0)
  // IMP : RUNS AFTER UPDATION BUT BEFORE RENDERING
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  // VAR 4: RUNS'S ON MULP. DEPENDENCIES
  // useEffect(() => {
  //   alert("Runs when count/total get's updated")
  // }, [count, total])
  
  // VAR 5: adding cleanup function
  // FLOW -> count unmounted -> then count updated -> count rendered
  // useEffect(() => {
  //   alert("Count is updated")
  //   return () => {
  //     // if cnt=4 cnt++ now 5 toh 4 UI se unmount hogya then update hooke 5 aaya
  //     alert("prev. no. of count was unmounted from UI")
  //   }
  // }, [count])
  
  
 

  function handleClick(){
    // void function does not return anything
    setCount(count+1);
  }
  function handleTotal(){
    setTotal(total+1);
  }
  return (
    // <div>
    //   <button onClick={handleClick}>
    //     Update Count
    //   </button>
    //   <br />
    //   Count is : {count}

    //   <br />

    //   <button onClick={handleTotal}>
    //     Update Total
    //   </button>
    //   <br />
    //   Count is : {total}
    // </div>

    // 2nd half of video...
    <div>
      {/* <LoggerComp /> this runs on every render   */}
      <TimerComp />
    </div>
  )
}

export default App
