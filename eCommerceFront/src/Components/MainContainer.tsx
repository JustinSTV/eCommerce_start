import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'


const MainContainer:React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>

  )
}

export default MainContainer