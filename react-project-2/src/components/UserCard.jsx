// rafce
import React from 'react'
import naruto from '../assets/naruto.jpg'
import "./UserCard.css"
// arrow fx ke parm. m props pass kra
const UserCard = (props) => {
  return (
    // udhar sytle ko quotes m likha kyuki inline style quotes m hi likha jaata
    <div className='user-container' style={props.style}>
        {/* {} used since using js in htmll */}
        <h1 id='user-name'>{props.name}</h1>
         {/* using imported cheez so {} */}
        <img id='user-img' src={props.imag} alt="anime" />
        <p id='user-desc'>Description of Naruto</p>
    </div>
  )
}

export default UserCard