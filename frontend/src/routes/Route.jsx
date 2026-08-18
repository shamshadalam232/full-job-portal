import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import JobsPage from '../pages/JobsPage.jsx'
import JobDetail from '../pages/JobDetail.jsx'
import CandidateDash from '../pages/CandidateDash.jsx'
import MyApplication from '../pages/MyApplication.jsx'
import RecruiterDash from '../pages/RecruiterDash.jsx'
import CreateCompany from '../pages/CreateCompany.jsx'
import CreatePage from '../pages/CreatePage.jsx'
import Company from '../pages/Company.jsx'
import RecruiterPage from '../pages/RecruiterPage.jsx'
import CreateCompanyRecruiter from '../pages/CreateCompanyRecruiter.jsx'
import EditPage from '../pages/EditPage.jsx'

export default function RouteConfig() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/job' element={<JobsPage />} />
        <Route path='/job/:id' element={<JobDetail />} />
        <Route path='/user/profile' element={<CandidateDash />} />
        <Route path='/applied-jobs' element={<MyApplication />} />
        <Route path='/applicants' element={<RecruiterDash />} />
        <Route path='/my-jobs' element={<CreateCompany />} />
        <Route path='/applicants/:jobId' element={<CreatePage />} />
        <Route path='/company/profile' element={<Company />} />
        <Route path='/create-job' element={<RecruiterPage />} />
        <Route path='/create-company' element={<CreateCompanyRecruiter />} /> 
        <Route path='/company-edit' element={<EditPage />} />
      </Routes>
    </>
    
  )
}
