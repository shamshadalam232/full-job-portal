import React from 'react'
import {Search} from 'lucide-react'
import Hompage2Component from '../components/HomePage2/Hompage2Component'
import JobCard from '../components/jobCard/JobCard'

export default function HomePage() {
  return (
    <>
        <div className='bg-blue-50 pt-16'>

          <div className='flex justify-center'>
          <div className=' m-11 items-center justify-center gap-3 bg-blue-100 px-5 py-2 rounded-full flex'>
            <div className='relative flex h-3 w-3'>
              <span className='absolute h-full w-full animate-ping rounded-full bg-blue-500 opacity-75'></span>
              <span className='relative h-3 w-3 rounded-full bg-blue-600'></span>
            </div>
            <h1 className='text-2xl text-center'>Hiring Developers Now</h1>
          </div>
          </div>


          <div className='flex justify-center'>
          <div className='p-6 text-center '>
            <h1 className='text-3xl font-bold'>Developer Jobs for Freshers & Experienced Professionals</h1>
            <p className='mt-[10px] text-gray-600'>Verified private tech jobs from top companies</p>
          </div>
          </div>


          <div className='bg-white p-5 flex flex-col md:flex-row gap-4 md:items-center rounded-lg md:justify-around max-w-5xl mx-auto'>

            <div className='w-full md:w-auto relative'>
               <Search size={22} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'/>
               <input type='text' placeholder='Search Jobs...' className='bg-blue-50 h-10 rounded-xl w-full px-10 outline-none'/>
            </div>
            <div className='w-full md:w-auto'>
               <select className='w-full md:w-56 h-10 px-4 rounded-xl border outline-none'>
                <option>Select location</option>
                <option>Noida</option>
                <option>Banglore</option>
                <option>Delhi</option>
                <option>Kolkatta</option>
                <option>Bhopal</option>
                <option>Chennai</option>
               </select>
            </div>
            <div className='w-full md:w-auto'>
              <button className='w-full md:w-auto bg-blue-600 text-white px-6 h-10 rounded-xl hover:bg-blue-700'>Search</button>
            </div>
          </div>

          <div className='w-full md:w-auto'>
            <div className='mt-10 h-10 flex justify-center'>Looking to hire ? <span className='underline text-blue-600'>Post a Job</span></div>
          </div> 
        </div>
        <Hompage2Component />
        <div className='flex flex-col md:flex-row flex-wrap'>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        
    </>
    
  )
}
