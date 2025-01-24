import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        Dashboard
        {/* An Outer must be used in Parent Route to render their Child Route  */}
        {/* This is where nested routes will render  */}
        <Outlet />
    </div>
  )
}

export default Dashboard