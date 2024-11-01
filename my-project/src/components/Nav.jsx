import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center px-96'>
      <Link to='/'>HOME</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Nav
