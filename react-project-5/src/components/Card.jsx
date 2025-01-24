import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        {/* iss e wali cheez ko revise kro  */}
        <input type="text" onChange={(e)=> props.setName(e.target.value)} />
        <p>Name State variable ki value inside card : {props.name}</p>
    </div>
  )
}

export default Card