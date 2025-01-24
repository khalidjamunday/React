import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard');
    }
  return (
    <div>
        About
        <br />
        <button onClick={handleClick}>
            Move to Dashboard page
        </button>
    </div>
  )
}

export default About