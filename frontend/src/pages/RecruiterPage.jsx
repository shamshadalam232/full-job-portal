import React, { useState } from 'react'
import api from '../api/Axios'
import { useNavigate } from 'react-router-dom'

export default function RecruiterPage() {

  const [formData, setFormData] = useState({
    title: " ",
    description:" ",
    location:" ",
    workMode:" ",
    category:" ",
    validDate:" ",
    salary:" ",
    experience:" ",
    skills:" "
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
   setFormData({
    ...formData,
    [e.target.name]: e.target.value
   })
  }

  const handleSubmit = async (e) => {
   e.preventDefault()
   const res = await api.post('/users/create-job', formData)
    navigate('/my-jobs')
  }

  return (
    <>
     <div>RecruiterPage</div>
     <div>
      <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input onChange={handleChange} name='title' placeholder='Enter Your title...' type='text' />

        <h1>Description</h1>
        <input name='description' onChange={handleChange} placeholder='Enter Your title...' type='text' />

        <h1>Location</h1>
        <input onChange={handleChange} name='location' placeholder='Enter Your title...' type='text' />

        <h1>Work Mode</h1>
        <input onChange={handleChange} name='workMode' placeholder='Enter Your title...' type='text' />

        <h1>Catgory</h1>
        <input onChange={handleChange} name='category' placeholder='Enter Your title...' type='text' />

        <h1>Valid Date</h1>
        <input onChange={handleChange} name='validDate' placeholder='Enter Your title...' type='text' />

        <h1>Salary</h1>
        <input onChange={handleChange} name='salary' placeholder='Enter Your title...' type='text' />

        <h1>Experience</h1>
        <input onChange={handleChange} name='experience' placeholder='Enter Your title...' type='text' />

        <h1>skills</h1>
        <input onChange={handleChange} name='skills' placeholder='Enter Your title...' type='text' />

        <button>SUBMIT</button>
      </form>
     </div>
    </>
   
  )
}
