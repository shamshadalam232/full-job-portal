import React, { useEffect, useState } from 'react'
import JobCard from '../components/jobCard/JobCard'
import api from '../api/Axios'


export default function JobsPage() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
     async function fetchJobs() {
      const Jobs = await api.get('/users/alljob')
      setJobs(Jobs.data.allJob)
     }
     fetchJobs()
  },[])

  
  return (
    <div>
      <div>
        <h1>Latest Developer Jobs</h1>
        <h1>Find your next opportunity from verified tech companies</h1>
      </div>
       { jobs.map((data) => {
                    return <JobCard key={data._id} companyName={data.company.companyName} title={data.title} skills={data.skills} companyLogo={data.company.companyLogo} workMode={data.workMode} validDate={new Date(data.validDate).toLocaleDateString()} location={data.location} experience={data.experience}/>
                   }) }
    </div>
  )
}
