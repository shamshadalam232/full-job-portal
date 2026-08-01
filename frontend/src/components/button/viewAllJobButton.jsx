import { MoveRight } from 'lucide-react'
import React from 'react'

export default function Button() {
  return (
    <div className='flex justify-center border-2 border-blue-700 w-fit mx-auto h-13 p-5 gap-2 mb-4 cursor-pointer rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95'>
      <button className='flex justify-center'>View all Jobs </button>
      <MoveRight className='flex justify-center items-center'/>
    </div>
  )
}
