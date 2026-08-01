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
    <>
      <div className='mt-8'>
        <h1 className='flex justify-center font-bold text-5xl mt-2'>Latest Developer Jobs</h1>
        <h1 className='flex justify-center text-2xl text-gray-500 mt-4 mb-8'>Find your next opportunity from verified tech companies</h1>
      </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                { jobs.map((data) => {
                    return <JobCard key={data._id} id={data._id} companyName={data.company.companyName} title={data.title} skills={data.skills} companyLogo={data.company.companyLogo} workMode={data.workMode} validDate={new Date(data.validDate).toLocaleDateString()} location={data.location} experience={data.experience}/>
                   }) }
               </div>  
    </>
  )
}
