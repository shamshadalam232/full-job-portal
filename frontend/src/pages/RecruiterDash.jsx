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
    <div key={item._id}>
      <div>{item.candidate.name}</div>
      <div>{item.candidate.email}</div>
      <div>{item.candidate.phone}</div>
      <div>{item.job.title}</div>
      <div>{item.candidate.resume}</div>

      <div>
        Status
        <select value={item.status} onChange={(e) => handleStatusChange(item._id, e.target.value)}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Rejected</option>
        </select>
      </div>
    </div>
  );
}
 
)}
</div>
  )
}
  
