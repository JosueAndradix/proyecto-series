import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <h1 className='navbar-brand'>Series Perronas</h1>
        <NavLink to='./pages/Home'>Inicio</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
