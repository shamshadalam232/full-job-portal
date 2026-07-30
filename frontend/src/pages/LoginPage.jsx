import React, { useState } from 'react'
import loginImage from "../assets/login image.jpg";
import registerImage from '../assets/sign-up-login-.webp'
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/Axios'

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
         email:'',
         password:''
    })

    
    const handleOnClick = async (e) => {
       e.preventDefault()
      try {
        const res = await api.post("/auth/login", formData);

        navigate('/home')
        console.log(res.data);
    } catch (err) {
        console.log(err.response)
    }
    }

    const handleOnChange = (e) => {
       setFormData({
         ...formData,
         [e.target.name]: e.target.value
       })
    }

  return (
    <div className='flex flex-col lg:flex-row min-h-screen mt-14'>
        <div className='w-full lg:w-1/2 '>
        <img className='w-full h-full object-cover p-10' src={loginImage} alt='register' />
        </div>


        <div className='w-full lg:w-1/2 m-1 mt-1'>
        <div className='rounded-xl shadow-lg p-6'>
        <h1 className='text-4xl flex justify-center'>Welcome back!</h1>
        <p className='flex justify-center'>Login to continue to your account</p>
        <form>
            <div className='p-2'>
            <label>
                <span className='label-text font-medium text-xl'>Email Adress</span>
             </label>
             <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Mail className='size-5 text-base-content/30'/>
                </div>
                <input type='email' name='email' onChange={handleOnChange}
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
                <input type={showPassword ? 'text' : 'password'} name='password' onChange={handleOnChange}
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
             

             <button type='submit' onClick={handleOnClick}
             className='btn btn-primary flex justify-center w-full rounded-full bg-indigo-900 mt-4 text-orange-600 h-10 items-center active:scale-95'>
               Submit
             </button>

            </div>
        </form>
        <div className='flex justify-center mt-5'>
          <h1>if you have not account ? <button onClick={() => navigate('/register')} className="text-slate-900 underline">Register</button></h1>
        </div>
        </div>
        </div>
    </div>
  )
}
