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
     <div className='bg-blue-100 flex justify-center text-2xl p-4 text-red-500 rounded-lg'>Create Your Job And Submit</div>
     <div className='bg-blue-600 text-white'>
      <form onSubmit={handleSubmit}>
        <h1 className='p-2 text-lg'>Title</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='title' placeholder='Enter Your title...' type='text' />

        <h1 className='p-2 text-lg'>Description</h1>
        <input className='w-full p-4 rounded-lg' name='description' onChange={handleChange} placeholder='Enter Your Description...' type='text' />

        <h1 className='p-2 text-lg'>Location</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='location' placeholder='Enter Your location...' type='text' />

        <h1 className='p-2 text-lg'>Work Mode</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='workMode' placeholder='Enter Your workMode...' type='text' />

        <h1 className='p-2 text-lg'>Catgory</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='category' placeholder='Enter Your category...' type='text' />

        <h1 className='p-2 text-lg'>Valid Date</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='validDate' placeholder='Enter Your valid date...' type='text' />

        <h1 className='p-2 text-lg'>Salary</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='salary' placeholder='Enter Your salary...' type='text' />

        <h1 className='p-2 text-lg'>Experience</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='experience' placeholder='Enter Your experiance...' type='text' />

        <h1 className='p-2 text-lg'>skills</h1>
        <input className='w-full p-4 rounded-lg' onChange={handleChange} name='skills' placeholder='Enter Your skills...' type='text' />

        <button className='p-4 bg-orange-700 m-3 rounded-lg hover:scale-95'>SUBMIT</button>
      </form>
     </div>
    </>
   
  )
}
