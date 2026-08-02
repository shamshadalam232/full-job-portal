
import React, { useEffect, useState } from 'react'
import { MoveLeft } from 'lucide-react'
import JobDetailCard from '../components/JobDetailComponent.jsx/JobDetailCard'
import JobOverview from '../components/JobDetailComponent.jsx/JobOverview'
import JobDescription from '../components/JobDetailComponent.jsx/JobDescription'
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/Axios";

export default function JobDetail() {

  const navigate = useNavigate()

  const backtoJob = () => {
    navigate('/job')
  }

  const {id} = useParams()
  
      const [oneJob , setOneJob] = useState({})
  
      useEffect(() => {
          async function fetchSingleJob() {
              const jobs = await api.get(`/users/alljob/${id}`)
              setOneJob(jobs.data.singleJob)
          }
          fetchSingleJob()
          
      },[id])
  
  return (
    <div className="bg-blue-50 min-h-screen">

      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:text-blue-800" onClick={backtoJob}>
          <MoveLeft size={22} />
          <span>Back to Jobs</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">

        <div className="w-full lg:w-[70%]">
          <JobDetailCard oneJob={oneJob}/>
          <JobDescription oneJob={oneJob} />
        </div>

        <div className="w-full lg:w-[30%]">
          <JobOverview oneJob={oneJob} />
        </div>

      </div>

    </div>
  )
}