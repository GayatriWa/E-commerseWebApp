import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center items-center gap-x-5 p-10 mb-10'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </nav>

  )
}

export default Nav