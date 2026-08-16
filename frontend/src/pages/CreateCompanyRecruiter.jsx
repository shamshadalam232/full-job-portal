import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import { useNavigate } from 'react-router-dom'

export default function CreateCompanyRecruiter() {

  const [formData, setFormData] = useState({
  companyName: "",
  companyLogo: "",
  companyWebsite: "",
  companyLocation: "",
  companyIndustry: "",
  companySize: "",
  companyFoundedYear: "",
  companyDescription: "",
  companySocialLinks: "",
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
  const res = await api.post('/users/create-company', formData)
   navigate('/company/profile')
  console.log(res.data)
} catch (error) {
  console.log(error)
}
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }


  return (
    <>
  <div>
    <h1>Create Your Company Here!</h1>
  </div>
  <div className='bg-blue-200 p-5'>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Image  </h1>
        <input onChange={handleChange}  name='companyLogo' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Name</h1>
        <input  onChange={handleChange} name='companyName' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Website </h1>
        <input onChange={handleChange} name='companyWebsite' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Location </h1>
        <input onChange={handleChange} name='companyLocation' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Industry </h1>
        <input onChange={handleChange} name='companyIndustry' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Size </h1>
        <input onChange={handleChange} name='companySize' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Founded Year </h1>
        <input onChange={handleChange} name='companyFoundedYear' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Description</h1>
        <input onChange={handleChange} name='companyDescription' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Social Links</h1>
        <input onChange={handleChange} name='companySocialLinks' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <button>Create Company</button>
    </form>
  </div>
    
    </>
  )
}
