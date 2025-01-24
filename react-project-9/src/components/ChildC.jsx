import React from 'react'
import { useContext } from 'react'; // yeh daalna bhul gya tha
// import { UserContext } from '../App' // importing context
import { ThemeContext } from '../App';
import { use } from 'react';

const ChildC = () => {
  // useContext() Usercontext context bnaaya tha app.jsx
  // CONSUMING PASSED VALUE UDHAR SE USER BHEJA AS VALUE IDHAR NIKAL LIYA
  // const user = useContext(UserContext);

  // Destructuring obj
  const {theme, setTheme} = useContext(ThemeContext);
  function handleClick(){
    if(theme === 'light')
        setTheme('dark')
    else    
        setTheme('light')
  }
  return (
    <div>
        {/* Hello
        Name : {user.name} */}

        {/* proj */}
        <button onClick={handleClick}>
            Change Theme
        </button>

    </div>
  )
}

export default ChildC