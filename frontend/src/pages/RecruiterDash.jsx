import React, { useEffect, useState } from 'react'
import api from '../api/Axios'

export default function RecruiterDash() {

  const [recruiterApplication, setRecruiterApplication] = useState([])

  useEffect(() => {
    getAppliedJobs()
  },[])

  const getAppliedJobs = async () => {
    const res = await api.get('/users/user-application/recruiter')
    console.log(res.data)
    setRecruiterApplication(res.data.findApplication)
  }

  const handleStatusChange = async (applicationId, status) => {
    const res = await api.patch(`/users/user-application/${applicationId}`, {status})
    await getAppliedJobs()
  }
  return (

    <div>
    
    {recruiterApplication.map((item) => {
  return (
    <div className='bg-slate-400 p-2 m-2 rounded-lg'>
    <div key={item._id} className='p-4 '>
      <div className='flex gap-4'>
        <span>Name :</span>
        <p>{item.candidate.name}</p>
        </div>

      <div className='flex gap-4 '>
        <span>Email :</span>
        <p className='flex md:flex-col'>{item.candidate.email}</p>
      </div>

      <div className='flex gap-4'>
        <span>Mob No :</span>
        <p>{item.candidate.phone}</p>
        </div>

      <div className='flex gap-4'>
        <span>Title :</span>
        <p>{item.job.title}</p>
        </div>

      <div>{item.candidate.resume}</div>

      <div>
        Status :
        <select className='ml-4' value={item.status} onChange={(e) => handleStatusChange(item._id, e.target.value)}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Reject</option>
        </select>
      </div>
    </div>
    </div>
  );
}
 
)}
</div>
  )
}
  
