import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import konh from "./assets/konh.jpg"
import itach from "./assets/itachi.jpg"
import nar from "./assets/naruto.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* in html tag ke andar kuch likha hota was ca ATTRIBUE idhar PROP KAHTE H in jsx syntax */}
      <UserCard name="Naruto" imag={nar} style={{"border-radius" : "10px"}}/>
      <UserCard name="Itachi" imag={itach}/>
      <UserCard name="Uchiya" imag={itach}/>
      <UserCard name="Konahamru" imag={konh}/>
    </div>
  )
}

export default App
