import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import { useNavigate } from 'react-router-dom'

export default function Company() {

  const [company, setCompany] = useState(null)

  useEffect(() => {
    fetchCompany()
  }, [])

  const fetchCompany = async () => {
    const res = await api.get('/users/get-company')
    console.log(res.data.findCompany)
    setCompany(res.data.findCompany)
  }

  const navigate = useNavigate()

  return (
    <>
      <div className='bg-blue-100 p-4 text-2xl text-center'>Your Company Profile Here.</div>

      {company ? (
        <div className='bg-blue-400 text-white p-4 rounded-lg'>
          <img src={company.companyLogo} className='h-24 w-24 rounded-full' />
          <div className='flex gap-4'>
            <h1>Company Name :</h1>
            <h1>{company.companyName}</h1>
          </div>
          <div className='flex gap-4'>
            <h1>Company Description :</h1>
            <p>{company.companyDescription}</p>
          </div>
          <div className='flex gap-4'>
            <h1>Company Industry :</h1>
            <p>{company.companyIndustry}</p>
          </div>
          <div className='flex gap-4'>
            <h1>Company Location :</h1>
            <p>{company.companyLocation}</p>
          </div>
          <div className='flex gap-4'>
            <h1>Company Size :</h1>
            <p>{company.companySize}</p>
          </div>
          <div className='flex gap-4'>
            <h1>Company SocialLinks :</h1>
            <p>{company.companySocialLinks}</p>
          </div>
          <div className='flex gap-4'>
            <h1>Company Website</h1>
            <p>{company.companyWebsite}</p>
          </div>

          <button className='bg-blue-700 text-white p-2 m-4 rounded-lg hover:scale-95' onClick={() => navigate('/company-edit')} >
            Edit Company
          </button>
        </div>

      ) : (
        <div>
          <h1>Create Your Company</h1>

          <button className='bg-gray-700 text-white p-2 rounded-lg hover:scale-95' onClick={() => navigate('/create-company')}>
            Create Company
          </button>
        </div>
      )}
    </>
  );
}
