import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext';
import EditProfileModal from '../components/modal/EditProfileModal';


export default function CandidateDash() {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false)

//   if (!currentUser) {
//   return <h1>Loading...</h1>;
// }

  return (
    <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden'>
      <div className='relative'>
       <div className='h-44 bg-gradient-to-r from-blue-600 to-cyan-500' >
        
       </div>
       
         <img src='#' className='absolute -bottom-10 left-8 w-36 h-36 rounded-full border-4 border-white object-cover' />
       </div>


  <div className="pt-20 px-8 flex justify-between items-center">
  <div>
    <h1 className="text-3xl font-bold">{currentUser?.name}</h1>
    <p className="text-gray-500">{currentUser?.email}</p>
  </div>

  <button onClick={() => setOpenModal(true)} className="bg-blue-600 text-white px-5 py-2 rounded-lg">
    Edit Profile
  </button>
  <EditProfileModal isOpen={openModal} onClose={() => setOpenModal(false)}/>
</div>


<div className="px-8 mt-6">
  <h2 className="font-semibold text-lg mb-3">Skills</h2>

 
    <div className="flex flex-wrap gap-2">
     {currentUser?.skills.map((skill, index) => {
      return (
      <span key={index}
        
        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
      >
        {skill}
      </span>
      )
  


  })}
  </div>
  </div>

  
<div className="grid md:grid-cols-2 gap-6 px-8 mt-8">

  <div className="border rounded-xl p-4">
    <h3 className="font-semibold">Phone</h3>
    <p>{currentUser?.phone}</p>
  </div>

  <div className="border rounded-xl p-4">
    <h3 className="font-semibold">Location</h3>
    <p>{currentUser?.location}</p>
  </div>

  <div className="border rounded-xl p-4">
    <h3 className="font-semibold">Education</h3>
    <p>{currentUser?.education}</p>
  </div>

  <div className="border rounded-xl p-4">
    <h3 className="font-semibold">Experience</h3>
    <p>{currentUser?.experience}</p>
  </div>
</div>


<div className="px-8 mt-8">
  <h2 className="text-xl font-semibold mb-2">About Me</h2>

  <p className="text-gray-600">
    {currentUser?.bio}
  </p>
</div>

<div className="px-8 mt-8 mb-8">
  <h2 className="text-xl font-semibold mb-3">Resume</h2>

  <a
    href={currentUser?.resume}
    target="_blank"
    className="bg-orange-500 text-white px-5 py-2 rounded-lg"
  >
    View Resume
  </a>
</div>

    </div>
  )
}
