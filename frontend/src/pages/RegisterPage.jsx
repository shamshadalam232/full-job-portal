import React, { useState } from 'react'
import loginImage from "../assets/login image.jpg";
import registerImage from '../assets/sign-up-login-.webp'
import { Eye, EyeOff, Lock, Mail, User, UserKey } from 'lucide-react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)


  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
        <div className='w-full lg:w-1/2 '>
        <img className='w-full h-full object-cover p-12' src={registerImage} alt='register' />
        </div>


        <div className='w-full lg:w-1/2 m-1 mt-3'>
        <div className='rounded-xl shadow-lg p-6'>
        <h1 className='text-4xl flex justify-center'>SignUp Here</h1>
        <p className='flex justify-center'>Register to continue to your account</p>
        <form>
            <div className='p-2'>
             <label>
                <span className='label-text font-medium text-xl'>Name</span>
             </label>
             <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <User className='size-5 text-base-content/30'/>
                </div>
                <input type='name'
                className='input input-bordered w-full pl-11 h-11'
                placeholder='Enter Your Name'
                />
             </div>

            <label>
                <span className='label-text font-medium text-xl'>Email Adress</span>
             </label>
             <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Mail className='size-5 text-base-content/30'/>
                </div>
                <input type='email'
                className='input input-bordered w-full pl-11 h-11'
                placeholder='Enter Your Email'
                />
             </div>


             <label>
                <span className='label-text font-medium text-xl'>Password</span>
             </label>
             <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Lock className='size-5 text-base-content/30'/>
                </div>
                <input type={showPassword ? 'text' : 'password'}
                className='input input-bordered w-full pl-11 h-11'
                placeholder='Enter Your Password'
                />
                <button type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/50 hover:text-base-content/80'
                onClick={() => setShowPassword(!showPassword)}
                >
                 {showPassword ? (
                    <EyeOff className='size-5 text-base-content/40'/>
                 ) : (
                    <Eye className='size-5 text-base-content/40'/>
                 )}
                </button>
             </div>


             <label>
                <span className='label-text font-medium text-xl'>Role</span>
             </label>
             <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <UserKey className='size-5 text-base-content/30'/>
                </div>
            <select className="select select-bordered w-full pl-11 h-11">
                <option value="">Select Role</option>
                <option value="jobSeeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
            </select>
             </div>
             

             <button type='submit'
             className='btn btn-primary flex justify-center w-full rounded-full bg-indigo-900 mt-7 h-11 text-orange-600 items-center text-2xl'>
               Submit
             </button>

            </div>
        </form>
        </div>
        </div>
    </div>
  )
}
