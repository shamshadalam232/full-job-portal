import { Briefcase, BriefcaseBusiness, Building2, ChevronDown, Droplet, LogOut, Menu, PlusCircle, User, Users, X } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import api from '../../api/Axios'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser)
   
  const [open, setOpen] = useState(false)

  const [openDropDown, setOpenDropDown] = useState(false)

  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event){
         dropDownRef.current.contains(event.target)

         if(!dropDownRef.current.contains(event.target)){
          setOpenDropDown(false)
         }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      
    }
  }, [])

  const navigate = useNavigate()

  const handleLogout = async () => {
    await api.post('/auth/logout')
    setCurrentUser(null)
    setOpenDropDown(false)
    navigate('/')
  }

  return (
    
    <>
  {/* ======================== Navbar ======================== */}
  <nav className="flex justify-between items-center h-16 p-3 bg-white shadow sticky top-0 left-0 w-full">

    {/* ========== Logo ========== */}
    <div className="flex items-center gap-2">
      <Briefcase size={36} color="#15139a" />
      <span className="text-2xl">JobPortal</span>
    </div>

    {/* ========== Desktop Navigation ========== */}
    <div className="hidden md:flex gap-11 text-2xl cursor-pointer">
      <Link to="/">Home</Link>
      <Link to="/job">Jobs</Link>
      <Link to="/company">Companies</Link>
    </div>

    {/* ========== Guest User (Not Logged In) ========== */}
    {!currentUser && (
      <div className="hidden md:flex gap-5 text-xl cursor-pointer">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )}

    {/* =====================================================
        Job Seeker Navbar
    ====================================================== */}
    {currentUser?.role === "jobSeeker" && (
      <div ref={dropDownRef} className="relative">

        {/* Avatar Button */}
        <button
          onClick={() => setOpenDropDown(!openDropDown)}
          className="hidden md:flex items-center gap-5 px-3 py-2 rounded-xl hover:bg-blue-50 transition cursor-pointer"
        >
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            {currentUser?.name[0].toUpperCase()}
          </div>

          {/* User Name */}
          <div className="font-medium text-gray-800">
            {currentUser?.name}
          </div>

          {/* Dropdown Arrow */}
          <ChevronDown size={18} />
        </button>

        {/* Dropdown */}
        {openDropDown && (
          <div className="absolute right-0 top-14 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2">

            <Link
              to="/user/profile"
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50"
            >
              <User size={18} />
              <span>My Profile</span>
            </Link>

            <Link
              to="/applied-jobs"
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50"
            >
              <BriefcaseBusiness size={18} />
              <span>Applied Jobs</span>
            </Link>

            <hr className="my-1" />

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 text-left"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>

          </div>
        )}
      </div>
    )}

    {/* =====================================================
        Recruiter Navbar
    ====================================================== */}
    {currentUser?.role === "recruiter" && (
      <div ref={dropDownRef} className="relative">

        {/* Avatar Button */}
        <button
          onClick={() => setOpenDropDown(!openDropDown)}
          className="hidden md:flex items-center gap-5 px-3 py-2 rounded-xl hover:bg-blue-50 transition cursor-pointer"
        >
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            {currentUser?.name[0].toUpperCase()}
          </div>

          {/* Recruiter Name */}
          <div className="font-medium text-gray-800">
            {currentUser?.name}
          </div>

          {/* Dropdown Arrow */}
          <ChevronDown size={18} />
        </button>

        {/* Dropdown */}
        {openDropDown && (
          <div className="absolute right-0 top-14 w-52 bg-white rounded-xl shadow-xl border border-gray-200 py-2">

            <Link
              to="/company/profile"
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50"
            >
              <Building2 size={18} />
              <span>Company Profile</span>
            </Link>

            <Link
              to="/create-job"
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50"
            >
              <PlusCircle size={18} />
              <span>Post Job</span>
            </Link>

            <Link
              to="/my-jobs"
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50"
            >
              <BriefcaseBusiness size={18} />
              <span>My Jobs</span>
            </Link>

            <Link
              to="/applicants"
              className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50"
            >
              <Users size={18} />
              <span>Applicants</span>
            </Link>

            <hr className="my-1" />

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 text-left"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>

          </div>
        )}
      </div>
    )}

    {/* ========== Mobile Menu Icon ========== */}
    {open ? (
      <X
        className="flex md:hidden cursor-pointer"
        onClick={() => setOpen(false)}
      />
    ) : (
      <Menu
        className="flex md:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      />
    )}
  </nav>

  {/* ================= Mobile Menu ================= */}
  {open && (
    <div className="w-full bg-white shadow rounded-lg px-4 py-3 text-xl">

      <Link className="block py-2" to="/">🏠 Home</Link>

      <Link className="block py-2" to="/job">💼 Jobs</Link>

      <Link className="block py-2" to="/company">🏢 Companies</Link>

      {!currentUser && (
        <>
          <Link className="block py-2" to="/login">🔑 Login</Link>

          <Link className="block py-2" to="/register">📝 Register</Link>
        </>
      )}
    </div>
  )}
</>
  )
}
