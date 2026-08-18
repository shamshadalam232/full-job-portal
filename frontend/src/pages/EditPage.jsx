import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/Axios'

export default function EditPage() {

  const [formData, setFormData] = useState({
  companyName: "",
  companyLogo: "",
  companyWebsite: "",
  companyLocation: "",
  companyIndustry: "",
  companySize: "",
  companyFoundedYear: "",
  companyDescription: "",
  companySocialLinks: "",
  })

  const [companyLogo, setCompanyLogo] = useState(null)

  useEffect (() => {
    const getJob = async () => {
      const res = await api.get('/users/get-company')
      setFormData({
         companyName : res.data.findCompany.companyName,
         companyDescription: res.data.findCompany.companyDescription,
         companyLocation: res.data.findCompany.companyLocation,
         companyIndustry: res.data.findCompany.companyIndustry,
         companySize: res.data.findCompany.companySize,
         companyFoundedYear: res.data.findCompany.companyFoundedYear,

      })

      console.log(res.data.findCompany)
    }
    getJob()
  },[])

  const navigate = useNavigate()

  const handleChange = (e) => {
         setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append('companyName', formData.companyName)
  data.append('companyWebsite', formData.companyWebsite)
  data.append('companyLocation', formData.companyLocation)
  data.append('companyIndustry', formData.companyIndustry)
  data.append('companySize', formData.companySize)
  data.append('companyFoundedYear', formData.companyFoundedYear)
  data.append('companyDescription', formData.companyDescription)
  data.append('companySocialLinks', formData.companySocialLinks)

  if(companyLogo){
    data.append('companyLogo', companyLogo)
  }
  navigate('/company/profile')
  console.log("SELECTED FILE:", companyLogo)
console.log("FORM DATA:", [...data.entries()])
     const res = await api.patch('/users/update-company', data)
  }


  return (
    <>
      <div>EditPage</div>
      <div>
        <form onSubmit={handleSubmit}>

          <h1>company Logo</h1>
          <input onChange={(e) => setCompanyLogo(e.target.files[0])} name='companyLogo' placeholder='select your new photo' type='file' accept='image/jpeg,image/png'/>

         <h1>Company Name</h1>
        <input value={formData.companyName} onChange={handleChange} name='companyName' placeholder='Enter Your title...' type='text' />

        <h1>Company Description</h1>
        <input value={formData.companyDescription} name='companyDescription' onChange={handleChange} placeholder='Enter Your title...' type='text' />

        <h1>Company Industry</h1>
        <input value={formData.companyIndustry} onChange={handleChange} name='companyIndustry' placeholder='Enter Your title...' type='text' />

        <h1>Company Location</h1>
        <input value={formData.companyLocation} onChange={handleChange} name='companyLocation' placeholder='Enter Your title...' type='text' />

        <h1>Company Size</h1>
        <input value={formData.companySize} onChange={handleChange} name='companySize' placeholder='Enter Your title...' type='text' />

        <h1>Company Founded Year</h1>
        <input value={formData.companyFoundedYear} onChange={handleChange} name='companyFoundedYear' placeholder='Enter Your title...' type='text' />

        <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </>
    
  )
}
