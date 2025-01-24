import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  // STATE create, manage and change parent m hogi
  // then sbhi child m state ko sync karwa dunga
  const [name, setName] = useState('');
  return (
    <div>
      {/* each child has acc. to statevarb and statechange krne wala fx as we passed them as attribute or PROPS */}
      <Card title='Card1' name = {name} setName = {setName}/>
      <Card title='Card2' name = {name} setName = {setName}/>
      <p>I am inside parent component and value of state varibale name is : {name}</p>
    </div>
  )
}

export default App
