import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'

export default function RouteConfig() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </>
    
  )
}
