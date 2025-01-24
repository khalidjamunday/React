import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function handleclick(){
        navigate('/about');
    }
  return (
    <div>
        Home
        <button onClick={handleclick}>
            Move to About page
        </button>
    </div>
  )
}

export default Home;