import React from 'react'

export default function CreateCompanyRecruiter() {
  return (
    <>
    
  <div>
    <h1>Create Your Company Here!</h1>
  </div>
  <div className='bg-blue-200 p-5'>
    <form>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Image  </h1>
        <input  name='logo' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Name</h1>
        <input name='companyName' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Website </h1>
        <input name='companyWebsite' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Location </h1>
        <input name='companyLocation' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Industry </h1>
        <input name='companyIndustry' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Size </h1>
        <input name='companySize' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Founded Year </h1>
        <input name='' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Description</h1>
        <input className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
        <h1 className=''>Company Social Links</h1>
        <input className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
      </div>
      <button>Create Company</button>
    </form>
  </div>
    
    </>
  )
}
