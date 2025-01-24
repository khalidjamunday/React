import './App.css'
import { useState } from 'react';
import Button from './components/button';
import Card from './components/Card'

// 2.1 passing children as prop

// function App() {

//   return (
//     <div>
//       <Card name="love babbar"> 
//         {/* card comp. tag (ya kisi bhi comp. tag) ke andar ka sb is CHILDREN  */}
//         <h1>Best Web Developer</h1>
//         <p>Trying to be consistent</p>
//         <p>Let's Go!!!</p>
//       </Card>
//       <Card children="if no content inside card then this children would be executed o/w jo neeche likha hua hoga ">
//         {/* <p>children hai ab toh upar wala children overwrite ho jayega</p> */}
//       </Card>
//     </div>
//   )
// }

// 2.2 passing function as prop

function App(){
  // comp. ke andar hi fx bna rhe
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1)
  }

  return (
    <div>
      {/* here was passing not string but obj  */}
      <Button handleClick = {handleClick} text = "Click Mee!!">
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
