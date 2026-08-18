import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/Axios'

export default function EditPage() {

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

  useEffect (() => {
    const getJob = async () => {
      const res = await api.get('/users/get-company')
      setFormData({
         companyName : res.data.findCompany.companyName,
         companyDescription: res.data.findCompany.companyDescription,
         companyLocation: res.data.findCompany.companyLocation,
         companyIndustry: res.data.findCompany.companyIndustry,
         companySize: res.data.findCompany.companySize,
         companyFoundedYear: res.data.findCompany.companyFoundedYear,

      })

      console.log(res.data.findCompany)
    }
    getJob()
  },[])

  const navigate = useNavigate()

  const handleChange = (e) => {
         setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
     const res = await api.patch('/users/update-company', formData)
  }


  return (
    <>
      <div>EditPage</div>
      <div>
        <form onSubmit={handleSubmit}>
         <h1>Company Name</h1>
        <input value={formData.companyName} onChange={handleChange} name='companyName' placeholder='Enter Your title...' type='text' />

        <h1>Company Description</h1>
        <input value={formData.companyDescription} name='companyDescription' onChange={handleChange} placeholder='Enter Your title...' type='text' />

        <h1>Company Industry</h1>
        <input value={formData.companyIndustry} onChange={handleChange} name='companyIndustry' placeholder='Enter Your title...' type='text' />

        <h1>Company Location</h1>
        <input value={formData.companyLocation} onChange={handleChange} name='companyLocation' placeholder='Enter Your title...' type='text' />

        <h1>Company Size</h1>
        <input value={formData.companySize} onChange={handleChange} name='companySize' placeholder='Enter Your title...' type='text' />

        <h1>Company Founded Year</h1>
        <input value={formData.companyFoundedYear} onChange={handleChange} name='companyFoundedYear' placeholder='Enter Your title...' type='text' />

        <button onClick={() => navigate('/company/profile')}>SUBMIT</button>
        </form>
      </div>
    </>
    
  )
}
