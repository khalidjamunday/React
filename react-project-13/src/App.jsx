import { useState, useMemo } from 'react';
import './App.css'

function App() {   
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0); // isse bhi dekho....

  function handleClick(){
    setCount(count + 1);
  }
  
  // using use memo first-> a calculative function
  // second dependencies jinke update pe function ko trigger krna hai
  let doubleValue = useMemo(() => expensiveTask(input), [input])
  // v .v. imp...
  // bs last i/p value ke liye hi answer memoize rahta h jaise 2->3->4->4(in no time)->3(would calculate again as last state ki hi value memoize h i.e. 4)

  function expensiveTask(num){
    console.log("Inside Expensive function")
    for(let i=0;i<1000000000;i++){}
    return num * 2;
  }

  // let doubleValue = expensiveTask(input); isko comment krke upar gye 

  return (
   <div>
    <button onClick={handleClick}>Increment</button>
    <br />
    <h1>Count : {count}</h1>
    <br />
    {/*                                                                                     see value  */}
    <input type="number" placeholder='Enter number' value={input} onChange={(e)=>setInput(e.target.value)}/>
    <div>
      Double : {doubleValue}
    </div>
   </div>
  )
}

export default App
