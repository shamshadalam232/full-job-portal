import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import { useParams } from 'react-router-dom'

export default function CreatePage() {

  const [applicant, setApplicant] =useState([])

  useEffect(() => {
    findApplicants()
  },[])

  const {jobId} = useParams()

  const findApplicants = async () => {
    const res = await api.get(`/users/user-application/applicant/${jobId}`)
    setApplicant(res.data.find)
  }
  return (
    <>
    <div>
      <h1 className='text-center text-2xl p-4 bg-slate-300 text-white rounded-lg'>This Job Applicants</h1>
    </div>

    {applicant.map((item) => {
      return (
      <div key={item._id} className='bg-blue-100 rounded-lg p-4 m-2'>
        <div className='flex gap-4'>
          <h1>Name :</h1>
          <h1>{item.candidate.name}</h1>
        </div>
        <div className='flex gap-4'>
          <h1>Email :</h1>
          <h1>{item.candidate.email}</h1>
        </div>
        <div className='flex gap-4'>
          <h1>Phone No :</h1>
           <h1>{item.candidate.phone}</h1>
        </div>
        <div className='flex gap-4'>
          <h1>Resume :</h1>
          <h1>{item.candidate.resume}</h1>
        </div>
       
       
       
       
    </div>
      )
    })}
    
    </>
  )
}
