import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"; 

const Forms = () => {
  return (
    <div className="flex flex-col items-center">
      Forms
    </div>
  )
}

const NavBar = () => { 
  return ( 
    <nav className="bg-gray-800 flex flex-col items-center"> 
      <NavLink to="/crud" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">CRUD</NavLink> 
      <NavLink to="/data-display" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">Data Display</NavLink> 
      <NavLink to="/data-manipulation" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">Data Manipulation</NavLink> 
      <NavLink to="/data-selection" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">Data Selection</NavLink> 
      <NavLink to="/image-handling" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">Image Handling</NavLink> 
      <NavLink to="/react-dom" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">React DOM</NavLink> 
      <NavLink to="/react-hooks" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">React Hooks</NavLink> 
      <NavLink to="/state-propagation" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">State Propagation</NavLink> 
      <NavLink to="/styling" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">Styling</NavLink> 
      <NavLink to="/forms" activeClassName="text-blue-300" className="text-white px-4 py-2 hover:text-blue-300">Forms</NavLink> 
    </nav> 
  ) 
}

export default NavBar
