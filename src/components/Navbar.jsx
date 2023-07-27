import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark' style={{ backgroundColor: '#333' }}>
      <div className='container'>
        <h1 className='navbar-brand' to='/'>
          Series Perronas
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Inicio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
