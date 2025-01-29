import { useState } from 'react'
import './App.css'
import Childcomp from './components/Childcomp';
import { useCallback, useRef, useEffect } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   // if we wrap this fx in useCallback() toh yeh fx freeze hogya h iska naya refrence nhi banega on re-render 
//   const handleClick = useCallback( ()=> {
//     setCount(count+1);
//   }, []);
//   // fx ek baar chalega manega value 0 aayegi usse yeh 1 krdega -> freeze hogya isliye not incrementing [] with empty depdency toh CHILD COMP WON'T RE-RENDER AS NAYA FX REF. NHI CREATE HUA
//   // [count] ke saath agar count change/update    toh new fx (fx recreate) create hoga new refrence toh CHILD COMP. BHI RE - RENDER

//   return (
//     <div>
//       <h1> Count : {count} </h1>
//       {/* handleclick ki jgh arrow fx bana diya */}
//       <button onClick = {handleClick}> Increment </button>
//       <br /><br />
//       {/* when state(i.e. count) updates and comp. rerenders whole code runs again also leading to re-render of childcomp. which is unnecessay in this case
//       to avoid this wrap child comp. in React.memo() -> now jb tk button name change nhi hoga childcomp. won't re-render */}
//       < Childcomp buttonName="Click Me" handleClick = {handleClick}/>
//     </div>
//   )
// }

// this code tells kb re-creation ho rha kb re-run using useCallback()
// count state changes it is depy. so fucntion will get re created aur agar type kra toh count not updating toh bs function run hoga no re-creation

function App(){
  const [count , setCount] = useState(0);
  const [text , setText] = useState("");
  const previousFunction = useRef(null);

  
  const expensiveCalculation = useCallback(()=>{
    console.log("Running Expensive operation");
    let res = 0; 
    for(let i=0; i<1000000; i++){
      res += i;
    }
    return res;
  }, [count])


  useEffect(() => {
    if(previousFunction.current){
      if(previousFunction.current === expensiveCalculation){
        console.log("Fucntion not re-created");
      }
      else{
        console.log("Function got re-created");
      }
    }
    else {
      // passing it's refernce to prevfx.curr name of fx as reference
      previousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation])

  return (
    <div>
      {/* text ki state cahnge toh entire comp. re-render pr new expcal fx will not be created as it has depey only on updation of count */}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder= "Type Something" />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick = {()=> setCount(count + 1)}> Increment Count </button>
    </div>
  )

}

export default App

