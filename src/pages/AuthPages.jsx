import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const AuthPages = () => {
  return (
    <>
    <NavBar></NavBar>
        <Outlet />
    </>
  )
}

export default AuthPages