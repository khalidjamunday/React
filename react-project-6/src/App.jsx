import {useState} from 'react'
import './App.css'
import Loginbtn from './components/Loginbtn';
import Logoutbtn from './components/Logoutbtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  // return ke andar nhi likhna if else ke andar return likho
  // Case 1 : Using if else

  // if(isLoggedIn){
  //   return (
  //     <Loginbtn />
  //   )
  // }
  // else{
  //   return (
  //     <Logoutbtn />
  //   )
  // }

  // Case 2 : Using ternary operators

  // I did this way syntax
  // return ((isLoggedIn) ? <Loginbtn/> : <Logoutbtn/>)
  // Babbar way
  // return(
  //   <div>
  //     {/* {} as using js inside div tag so needed */}
  //     { (isLoggedIn) ? <Loginbtn/> : <Logoutbtn/> }
  //   </div>
  // )

  // Case 4 : using Early return BASE CASE

  if(!isLoggedIn){
    return(
      <Loginbtn />
    )
  }

  // Case 3 : Using logical operator ( case 3 and 4 interconnected )

  // return ( isLoggedIn && <Loginbtn/>)
  // Babbar way
  return (
    <div>
      <h1>Welcome Everyone to codehelp</h1>
      <div>
        {isLoggedIn && <Logoutbtn />}
      </div>
    </div>
  )

}

export default App
