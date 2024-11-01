import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center px-96 w-full h-10 bg-purple-700 text-gray-200 border-black border-solid border-b-2 font-bold'>
      <Link to='/'>HOME</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/products'>Products</Link>
      <Link to='/profile'>Profile</Link>
    </nav>
  )
}

export default Nav
