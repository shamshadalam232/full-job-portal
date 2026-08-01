
import React from 'react'
import { MoveLeft } from 'lucide-react'
import JobDetailCard from '../components/JobDetailComponent.jsx/JobDetailCard'
import JobOverview from '../components/JobDetailComponent.jsx/JobOverview'
import JobDescription from '../components/JobDetailComponent.jsx/JobDescription'

export default function JobDetail() {
  return (
    <div className="bg-blue-50 min-h-screen">

      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:text-blue-800">
          <MoveLeft size={22} />
          <span>Back to Jobs</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">

        <div className="w-full lg:w-[70%]">
          <JobDetailCard />
          <JobDescription />
        </div>

        <div className="w-full lg:w-[30%]">
          <JobOverview />
        </div>

      </div>

    </div>
  )
}