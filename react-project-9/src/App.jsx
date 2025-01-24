import './App.css'
import React from 'react';
import { useState } from 'react'
import { createContext } from 'react' // idhar createcontext() ko import kra aur childC m useContext() kra
import ChildA from './components/ChildA';

// stp - 1 Create context
// const UserContext = createContext();

const ThemeContext = createContext();

function App() {
  // sending a js object
  // const [user, setUser] = useState({name : "Uchicha"});
  const [theme, setTheme] = useState('light')
  return ( 
      // <>
      //   {/* stp - 2 wrap all child (which we want can acc. our given data) inside a provider 
      //   (A ke andar B C bhi toh wo bhi wrap hogye)
      //   stp - 3 pass value (i.e. passing data)
      //   stp - 4 consume data (see in chidc.jsx) */}
      //   <UserContext.Provider value={user}>
      //     <ChildA /> 
      //   </UserContext.Provider>
      // </>

      // creating our small theme app

      // IMPORTANT
      // value={{ theme: theme, setTheme: setTheme }} , they are js objects which we ill destructrue
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme === 'light' ? "beige" : "black"}}>
          <ChildA/>
      </div>
      </ThemeContext.Provider>
  )
}

export default App
// imp. exporting created context

// export {UserContext}
export {ThemeContext}

