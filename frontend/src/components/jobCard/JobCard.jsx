import React from 'react'
import image from '../../assets/images.png'

export default function JobCard() {
  return (
    <div className='p-4'>
    <div className='bg-blue-100 shadow md:max-w-72 hover:shadow-2xl rounded-xl p-3'>
      <div className=''>
        <img src={image} alt='photo' className='rounded-xl h-11 w-14 p-1' />
      </div>

      <div>
        <h1 className='text-2xl font-bold mt-2'>Frontend Developer</h1>
      </div>

      <div>
        <h1 className='text-lg text-gray-600 mt-2 mb-4'>Google</h1>
      </div>

      <div className='flex gap-2 mb-5 text-lg'>
         <h1 className='bg-white rounded-xl p-1 h-6 w-20 flex items-center justify-center'>Fresher</h1>
         <h1 className='bg-white rounded-xl p-1 h-6 w-20 flex items-center justify-center'>Remote</h1>
         <h1 className='bg-white rounded-xl p-1 h-6 w-20 flex items-center justify-center'>full Time</h1>
      </div>
      <div className='flex gap-2 mt-1 mb-4'>
        <h1 className='bg-white rounded-xl p-1 h-6 w-20 flex items-center justify-center border-stone-900'>Node.js</h1>
        <h1 className='bg-white rounded-xl p-1 h-6 w-20 flex items-center justify-center'>Javascript</h1>
        <h1 className='bg-white rounded-xl p-1 h-6 w-20 flex items-center justify-center'>CSS</h1>
      </div>

      <div className='mb-4 mx-2'>
        <p>2 Days ago</p>
      </div>
      <div className='bg-blue-600 h-7 w-13 rounded-3xl flex justify-center'>
        <button className='btn px-11 active:scale-95'>Apply Now</button>
      </div>
    </div>
    </div>
  )
}
