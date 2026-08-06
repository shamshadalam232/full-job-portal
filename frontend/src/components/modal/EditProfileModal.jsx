import { X } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext';

export default function EditProfileModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const [formData, setFormData] = useState(currentUser)


    useEffect(() => {
        if (currentUser) {
            setFormData(currentUser)
        }

    }, [currentUser])


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        })
    }


    return (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50 '>
            <div className='bg-white p-6 max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl w-full max-w-2xl '>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-bold'>Edit Profile</h1>
                    <span><X onClick={onClose} /></span>
                </div>



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
                        value={formData?.skills || ""}
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
                    <input type='file' accept="image/*" className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Experiance...'></input>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <h1 className=''>Resume Update </h1>
                    <input type='file' accept=".pdf" className="w-full md:w-80 p-2 border-2 border-blue-400 rounded-lg" placeholder='Change Your Experiance...'></input>
                </div>


                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-4'>
                    <button className='bg-blue-600 text-white p-2 rounded-lg active:scale-95' onClick={onClose}>Cancel </button>
                    <button className='bg-blue-600 text-white p-2 rounded-lg active:scale-95'>Save Change </button>
                </div>




            </div>
        </div>
    )
}
