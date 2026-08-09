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
      <h1>Applicants</h1>
    </div>

    {applicant.map((item) => {
      return (
      <div key={item._id}>
       <h1>{item.candidate.name}</h1>
       <h1>{item.candidate.email}</h1>
       <h1>{item.candidate.phone}</h1>
       <h1>{item.candidate.resume}</h1>
    </div>
      )
    })}
    
    </>
  )
}
