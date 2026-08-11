import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import { useNavigate } from 'react-router-dom'

export default function Company() {

  const [company, setCompany] = useState(null)

  useEffect(() => {
    fetchCompany()
  },[])

  const fetchCompany = async () => {
    const res = await api.get('/users/get-company')
    console.log(res.data.findCompany)
    setCompany(res.data.findCompany)
  }

  const navigate = useNavigate()

  return (
  <>
    {company ? (
      <div>
        <h1>{company.companyName}</h1>
        <p>{company.location}</p>
        <p>{company.description}</p>

        <button >
          Edit Company
        </button>
      </div>
    ) : (
      <div>
        <h1>Create Your Company</h1>

        <button onClick={() => navigate('/create-company')}>
          Create Company
        </button>
      </div>
    )}
  </>
);
}
