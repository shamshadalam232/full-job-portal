import React, { useEffect, useState } from 'react'
import api from '../api/Axios'
import EditModal from '../components/modal/EditModal'
import { useNavigate } from 'react-router-dom'

export default function CreateCompany() {

    const [getJobs, setGetJobs] = useState([])

    const [selectedJob, setSelectedJob] = useState(null)

    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        fetchJobs()
    }, [])

    const fetchJobs = async () => {
        const res = await api.get('/users/get-job')
        console.log(res.data.findJobs)
        setGetJobs(res.data.findJobs)
    }


    const deleteApplication = async (id) => {
        const res = await api.delete(`/users/get-job/${id}`)
        await fetchJobs()
    }

    const Navigate = useNavigate()


    return (
        <>
            <div className='bg-blue-300 rounded-lg'>
                <div>
                    <h1 className='flex items-center justify-center font-bold text-2xl'>My Posted Jobs</h1>
                    <p className='flex items-center justify-center text-xl text-slate-500'>Manage Your job postings</p>
                </div>
                <div>
                    <h1 className='flex items-center justify-center'>Total Jobs: </h1>
                    <span></span>
                </div>
            </div>

            {getJobs.map((item) => {
                return (
                    <div key={item._id} className='bg-blue-300 m-2 p-4 rounded-lg'>
                        <div>
                            <div className='flex gap-4'>
                               <span>Category :</span>
                               <h1>{item.category}</h1>
                            </div>
                            <div className='flex gap-4'>
                               <span>Title :</span>
                               <h1>{item.title}</h1>
                            </div>
                            <div className='flex gap-4'>
                              <span>Description :</span>
                               <h1>{item.description}</h1>
                            </div>
                            
                            
                           
                        </div>

                        <div>
                            <div className='flex gap-4'>
                                <span>Location :</span>
                                <h1>{item.location}</h1>
                            </div>
                            <div className='flex gap-4'>
                                <span>Salary :</span>
                                 <h1>{item.salary}</h1>
                            </div>
                            <div className='flex gap-4'>
                                <span>Experiance :</span>
                                <h1>{item.experience}</h1>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-4'>
                                <span>Skills :</span>
                                <h1>{item.skills}</h1>
                            </div>

                            <div className='flex gap-4'>
                                <span>WorkMode :</span>
                                 <h1>{item.workMode}</h1>
                            </div>
                            
                           
                        </div>

                        <div className='flex gap-4'>
                            <h1>posted</h1>
                            <span>{item.updatedAt}</span>
                        </div>
                        <div className='flex gap-4'>
                            <button className='bg-green-700 text-white p-2 rounded-lg hover:scale-95' onClick={() => Navigate(`/applicants/${item._id}`)}>View Application</button>

                            <button className='bg-blue-700 text-white p-2 rounded-lg hover:scale-95' onClick={() => {
                                setSelectedJob(item)
                                setOpenModal(true)
                            }}>Edit</button>

                            <button className='bg-red-700 text-white p-2 rounded-lg hover:scale-95' onClick={() => deleteApplication(item._id)}>Delete</button>
                        </div>
                    </div>
                )
            })}

            <EditModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                job={selectedJob}
                fetchJobs={fetchJobs}
            />


        </>
    )
}
