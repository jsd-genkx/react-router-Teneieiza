import React from 'react'
import Nav from '../../components/Nav'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <Nav />
    <div>
      <div className='flex justify-between items-center px-96 w-full h-10 bg-gray-700 text-gray-200 border-black border-solid border-b-2 font-bold'>
        <Link to='./userprofile'>Userprofile</Link>
        <Link to='./profileinfo'>Profileinfo</Link>
        <Link to='./orderlist'>Orderlist</Link>
        <Link to='./setting'>Setting</Link>
      </div>
      <Outlet/>
    </div>
    </>
  )
}

export default Profile
