import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        {/* iss e wali cheez ko revise kro  */}
        
        {/* e: This represents the event object, which is passed to an event handler when an event (like a click, keypress, or change) occurs. */}
        {/* target: The target property of the event object refers to the element that triggered the event (e.g., an <input>, <textarea>, or <select> element).  */}
        {/* value: The value property of the target element contains the current value of that element (e.g., the text typed into an input field). */}
        {/* e.target.value retrieves the current value of the element that triggered the event. */}
        <input type="text" onChange={(e)=> props.setName(e.target.value)} />
        <p>Name State variable ki value inside card : {props.name}</p>
    </div>
  )
}

export default Card