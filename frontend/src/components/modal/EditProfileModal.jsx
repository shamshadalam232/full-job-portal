import { X } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext';
import api from '../../api/Axios';

export default function EditProfileModal({ isOpen, onClose }) {


     const { currentUser, setCurrentUser } = useContext(UserContext);

    const [formData, setFormData] = useState(currentUser)

    const [profilePhoto, setProfilePhoto] = useState(null)


    useEffect(() => {
        if (currentUser) {
            setFormData(currentUser)
        }

    }, [currentUser])


    const handleChange = (e) => {
       if (e.target.name === "skills") {
    setFormData({
      ...formData,
      skills: e.target.value.split(",").map(skill => skill.trim()),
    });
  } else {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()

        data.append("phone", formData.phone)
  data.append("location", formData.location)
  data.append("skills", JSON.stringify(formData.skills))
  data.append("bio", formData.bio)
  data.append("education", formData.education)
  data.append("experience", formData.experience)

  if(profilePhoto){
    data.append("profilePhoto", profilePhoto)
  }
        const res = await api.patch('/users/profile', data)
        setCurrentUser(res.data.findUser),
        onClose()
    }

    
    if (!isOpen) {
        return null;
    }

   

    return (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50 '>
            <div className='bg-white p-6 max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl w-full max-w-2xl '>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>Edit Profile</h1>
                    <span><X onClick={onClose} /></span>
                </div>


                <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Phone </h1>
                    <input value={formData?.phone} onChange={handleChange} name='phone' className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
                </div>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Location</h1>
                    <input name="location" value={formData?.location} onChange={handleChange} className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Location...'></input>
                </div>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Skills </h1>
                    <input name="skills"
                        value={formData?.skills?.join(",") || ""}
                        onChange={handleChange} className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Number...'></input>
                </div>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Bio </h1>
                    <textarea name="bio"
                        value={formData?.bio || ""}
                        onChange={handleChange} rows={4} className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Bio...'></textarea>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Education </h1>
                    <input name="education"
                        value={formData?.education || ""}
                        onChange={handleChange} className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Education...'></input>
                </div>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Experiance </h1>
                    <input name="experience"
                        value={formData?.experience || ""}
                        onChange={handleChange} className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Experiance...'></input>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Change Photo </h1>
                    <input type='file' accept="image/*" className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Experiance...' onChange={(e) => setProfilePhoto(e.target.files[0])}></input>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Resume Update </h1>
                    <input type='file' accept=".pdf" className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Experiance...'></input>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <button className='bg-blue-600 text-white p-2 rounded-lg active:scale-95' onClick={onClose} type='button'>Cancel </button>
                    <button className='bg-blue-600 text-white p-2 rounded-lg active:scale-95'>Save Change </button>
                </div>

               </form>


            </div>
        </div>
    )
}
