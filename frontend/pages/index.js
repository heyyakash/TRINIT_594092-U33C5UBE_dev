import React, { useEffect, useState } from 'react'
import {RiLoginBoxFill} from 'react-icons/ri'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FcBusinessman,FcManager } from 'react-icons/fc'
import { useRouter } from 'next/router'


const Login = () => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [signIn,setSignIn] = useState(false)
    const {register,handleSubmit} = useForm()
    const [type, setType] = useState('Donor');
    const router = useRouter()
  

    useEffect(()=>{
      const d = JSON.parse(localStorage.getItem('session'))
      if(d){
        router.push('/home')
      }
    },[])

    const onSubmit = async (data) => {
      
      try {
          setLoading(true)
          const d = data
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/${type === "Donor" ? "login_user" : "login_ngo"}`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(d)
          })
          const result = await res.json()
          setLoading(false)
          if(result.success){
            localStorage.setItem('session',JSON.stringify(result))
            router.push('/home')
          }
          else{
            alert(result.message)
          }
          
      } catch (error) {
          setLoading(false)
          alert("Some Error Occuered")
      }
  }

  return (
    <div className='w-full md:max-h-[100vh] md:h-[100vh] bg-[url("/login.jpg")] bg-cover grid place-items-center'>
        
      <div className='lg:w-[500px] p-5 py-20 h-[100vh] lg:h-auto w-full bg-white drop-shadow-lg flex justify-center items-center gap-4 flex-col'>
        <RiLoginBoxFill className='text-green-700 text-2xl' />
        <h2 className='font-bold text-2xl'>Login to your account</h2>
        <p className='text-sm'>Don&rsquo;t have a account yet? <span className='text-green-700'><Link href = '/signup'>Sign up!</Link></span></p>
        <div className="flex flex-col lg:flex-row p-4 w-[400px] gap-2">
                    <div onClick={() => setType("NGO")} className={`p-2 flex-[1] ${type === "NGO" ? "bg-green-200" : ""} text-green-500 cursor-pointer flex justify-center items-center border-2 rounded-md border-green-500 gap-2`}>
                        <FcBusinessman className='text-xl' />
                        <p>NGO</p>
                    </div>
                    <div onClick={() => setType("Donor")} className={`p-2 flex-[1] ${type === "Donor" ? "bg-green-200" : ""} text-green-500 cursor-pointer flex justify-center items-center border-2 rounded-md border-green-500 gap-2`}>
                        <FcManager className='text-xl' />
                        <p>Donor</p>
                    </div>

                </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex my-4 flex-col gap-4 w-[300px]'>
   
          <input required type="email" placeholder='Email Address' id ="email" className={`form-input `} {...register('email',{required:true})} name = "email" />
          <input required type="password" placeholder='Password' id ="password" className={`form-input `} {...register('password',{required:true})} name = "password" />
          {error && <p className='text-red-500 text-sm '>{error} !</p> }
          <button type='submit' className='form-btn smooth'>{loading?"Signing in...":"Login"}</button>
        </form>

      </div>
    </div>
  )
}

Login.getLayout = ({children}) => {
  return(
    <>
      {children}
    </>
  )
} 

export default Login

