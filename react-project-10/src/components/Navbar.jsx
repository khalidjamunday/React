import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            {/* if we use <a></a> tag whole pg reload isliye we use <Link></Link> tag */}
            <li>
                {/* Adv. of Link v/s Navlink -> navlink is attached to a active class jisse styling add karna asan hojaata h */}
                {/* <Link to="/"> Home </Link> */}
                {/* isActive naam ka boolean flag bydefault hota h */}
                {/* This is a CSS class that you can define in your stylesheet (e.g., App.css) to style the currently active link. */}
                <NavLink to="/" className={({isActive}) => isActive ? "active-link" :  ""}> Home </NavLink>
            </li>
            <li>
                {/* <Link to="/about"> About </Link> */}
                <NavLink to="/about" className={({isActive}) => isActive ? "active-link" :  ""}> About </NavLink>
            </li>
            <li>
                {/* <Link to="/dashboard"> Dashboard </Link> */}
                <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" :  ""}> Dashboard </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar