import { Briefcase, Menu, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

export default function Navbar() {

  const { currentUser, setCurrentUser } = useContext(UserContext);

   
  const [open, setOpen] = useState(false)

  console.log(currentUser);

  return (
    
    <>

    <nav className='flex justify-between h-16 items-center p-3 bg-white shadow sticky top-0 left-0 w-full md:flex'>
      <div className='flex  gap-2 items-center'>
        <Briefcase size={36} color="#15139a"/>
        <span className='text-2xl'>JobPortal</span>
      </div>


      <div className='hidden md:flex justify-between text-2xl gap-11 cursor-pointer'>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/job">Jobs</Link>
        </div>
        <div>
          <Link to="/company">Companies</Link>
        </div>
      </div>


      <div className='hidden md:flex justify-between gap-5 cursor-pointer text-xl'>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
      {open ? <X className='flex md:hidden cursor-pointer' onClick={() => setOpen(!open)}/> : <Menu className='flex md:hidden cursor-pointer' onClick={() => setOpen(!open)}/>}
    </nav>

    {open && (
      <div className='w-full px-4 text-xl bg-white shadow  py-3 rounded-lg'>
      <div>
          <Link className='hover:bg-gray-400' to="/" onClick={() => open(!setOpen)}>🏠 Home</Link>
        </div>
        <div>
          <Link className='hover:bg-gray-400' to="/job" onClick={() => open(!setOpen)}>💼 Jobs</Link>
        </div>
        <div>
          <Link className='hover:bg-gray-400' to="/company" onClick={() => open(!setOpen)}>🏢 Companies</Link>
        </div>
        <div>
          <Link className='hover:bg-gray-400' to="/login" onClick={() => open(!setOpen)}>🔑 Login</Link>
        </div>
        <div>
          <Link className='hover:bg-gray-400' to="/register" onClick={() => open(!setOpen)}>📝 Register</Link>
        </div>
        </div>
    )}

    </>
  )
}
