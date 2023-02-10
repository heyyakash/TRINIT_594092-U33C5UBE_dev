import React, { useState } from 'react'
import {RiLoginBoxFill} from 'react-icons/ri'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const Login = () => {
    const [error,setError] = useState(false)
    const [signIn,setSignIn] = useState(false)
    const {register} = useForm()
  return (
    <div className='w-full md:max-h-[100vh] md:h-[100vh] bg-[url("/login.jpg")] bg-cover grid place-items-center'>
        
      <div className='lg:w-[500px] p-5 py-20 h-[100vh] lg:h-auto w-full bg-white drop-shadow-lg flex justify-center items-center gap-4 flex-col'>
        <RiLoginBoxFill className='text-green-700 text-2xl' />
        <h2 className='font-bold text-2xl'>Login to your account</h2>
        <p className='text-sm'>Don&rsquo;t have a account yet? <span className='text-green-700'><Link href = '/signup'>Sign up!</Link></span></p>
      
        <form onSubmit={(e)=>handleLogin(e)} className='flex my-4 flex-col gap-4 w-[300px]'>
          <input required type="email" placeholder='Email Address' id ="email" className={`form-input `} {...register('email',{required:true})} name = "email" />
          <input required type="password" placeholder='Password' id ="password" className={`form-input `} {...register('password',{required:true})} name = "password" />
          {error && <p className='text-red-500 text-sm '>{error} !</p> }
          <button type='submit' className='form-btn smooth'>{signIn?<img className='h-6' src="/loading.gif"  alt="loading" />:"Login"}</button>
        </form>

      </div>
    </div>
  )
}

export default Login