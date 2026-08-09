import React, { useEffect, useState } from 'react'
import api from '../api/Axios'

export default function MyApplication() {

  const [appliedJobs, setAppliedJobs] = useState([])

  useEffect(() => {
    getAppliedJobs()
  },[])

  const getAppliedJobs = async () => {
     const res = await api.get('/users/user-application')
     setAppliedJobs(res.data.validApplications)
  }


  return (
    <>
    <div className='p-4 bg-blue-100'>
      <div className='text-3xl font-bold text-center'>My Applied Jobs</div>
      <div className='flex items-center justify-center gap-4'>
         <h1 className='text-2xl'>Total Applied Jobs</h1>
         <span className='text-2xl'>{appliedJobs.length}</span>
      </div>
      
    </div>

   {appliedJobs.map((item) => (
    <div key={item._id}>
        <div  className='bg-blue-100 p-5 m-3 rounded-xl'>
          <div className='flex' >
      <div>
        <img src='#' className='h-16 w-16 rounded-full bg-white'/>
      </div>
      <div className='ml-12'>
      <h1 className='text-2xl font-bold'>{item.job.title}</h1>
        <h2 className='text-xl font-medium text-gray-500'>{item.job.company.companyName}</h2>
      </div>
      </div>
      <div className='flex gap-5 items-center p-3 text-white flex-wrap'>
        <div className='flex bg-blue-700 p-2 rounded-lg gap-2'>
           <span>Location</span>
           <h1>{item.job.location}</h1>
        </div>
        
        <div className='flex bg-blue-700 p-2 rounded-lg gap-2'>
           <span>Sallary</span>
           <h1>{item.job.salary}</h1>
        </div>
        
        <div className='bg-blue-700 p-2 rounded-lg'>
           <h1>Full-Time</h1>
        </div>
      </div>

      <div className='flex gap-4 bg-gray-600 text-white p-2 rounded-lg m-2'>
        <h1>Applied Time</h1>
        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
      </div>
      <div className='flex gap-4 bg-gray-600 text-white p-2 rounded-lg m-2'>
        <h1>Status</h1>
        <span>{item.status}</span>
      </div>
    </div>
    </div>
   ))
   }
    </>
  )
}
