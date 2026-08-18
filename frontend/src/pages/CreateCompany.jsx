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
            <div>
                <div>
                    <h1>My Posted Jobs</h1>
                    <p>Manage Your job postings</p>
                </div>
                <div>
                    <h1>Total Jobs: </h1>
                    <span></span>
                </div>
            </div>

            {getJobs.map((item) => {
                return (
                    <div key={item._id}>
                        <div>
                            
                            <h1>{item.category}</h1>
                            <h1>{item.title}</h1>
                            <h1>{item.description}</h1>
                        </div>

                        <div>
                            <h1>{item.location}</h1>
                            <h1>{item.salary}</h1>
                            <h1>{item.experience}</h1>
                        </div>

                        <div>
                            <h1>{item.skills}</h1>
                            <h1>{item.workMode}</h1>
                        </div>

                        <div>
                            <h1>posted</h1>
                            <span>{item.updatedAt}</span>
                        </div>
                        <div>
                            <button onClick={() => Navigate(`/applicants/${item._id}`)}>View Application</button>

                            <button onClick={() => {
                                setSelectedJob(item)
                                setOpenModal(true)
                            }}>Edit</button>

                            <button onClick={() => deleteApplication(item._id)}>Delete</button>
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
