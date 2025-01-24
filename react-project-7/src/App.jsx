import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // function return se upar likhne hai
  function handleClick() {
    return alert("You Clicked Me !!!!")
  }
  function handleMouseOver(){
    return alert("Para k upar mouse le kar aaye ho")
  }
  function handleInputChange(e){
    console.log("Value till Now : ", e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault(); // default behav. of btn in form it refersh page and send req. to server and we want to prevent that behaviour
    alert("Submit kardu kya ?? ")
  }

  return (
    <div>

       {/* IMMEDIATE INVOKATION */}
       {/* in this case jaise hi comp. render hoga jo bhi code likha h wo invoke hojayega */}
       {/* but we want jb click kre tb chle so pass FUCNTION REFERENCE i.e. fx name ya udhar hi arrow fx likh do */}
      {/* <button onClick={() => alert("Button click hua h")}> */}
      <button onClick={alert("Button click hua h")}>
        Click Me
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>

      <div>
        {/* prop. ki value in quotes */}
        <p onMouseOver={handleMouseOver} style={{border : "2px solid black" }}>
          I am a Paragraph
        </p>
      </div>

      {/* js ke E.H. ke long process yha sirf btn m attribute onclick do which expects a fx whose name we pass or we can write a arrow fucntion there also */}
      <button onClick={handleClick}>
        Click Me
      </button>


    </div>
  )
}

export default App
