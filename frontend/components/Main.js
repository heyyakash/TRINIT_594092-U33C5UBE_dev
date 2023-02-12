import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import LeftSide from '../components/LeftSide'
import Navbar from '../components/Navbar'
import RightSIde from '../components/RightSIde'

const Main = ({ children }) => {
    const [show, setShow] = useState(false)
    const [d,setD] = useState(null)

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('session'))
        setD(data)
    },[])

    const {register , handleSubmit} = useForm()

    const onSubmit = async (data) => {
        const payload = {...data,email:d.email,name:d.orgname?d.orgname: d.firstname + " " + d.lastname,date:(new Date()).toString()}
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/post`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })
        const result = await res.json()
        console.log(result)
        setShow(false)
    }

    return (
        <div className=' flex flex-col relative  min-h-[100vh] '>
            <Navbar />
            <form onSubmit = {handleSubmit(onSubmit)} className={`bg-white absolute z-[1000] ${show?"":"hidden"} p-4 drop-shadow-2xl self-center top-[10rem] rounded-2xl w-[600px]`}>
                <div className="flex gap-4 border-b pb-4">
                    <img src={`/favicon.ico`} className="h-12 cursor-pointer  rounded-full" alt="" />
                    <div className="flex flex-col flex-grow">
                        <p className="">{"Akash Sharma"}</p>
                        <p className="text-gray-500 text-sm">{(new Date()).toISOString().split('T')[0]}</p>
                    </div>
                </div>

                <textarea name="" id="" {...register('content')} className='w-full border-b-2 p-2' rows="3"></textarea>
                <div className='flex gap-2 mt-6'>
                    <input type="text" {...register('image')}  placeholder='Image link' className='form-input' />
                    <input type="text" {...register('upi')} placeholder='UPI link' className='form-input' />
                </div>
                <div className='flex gap-2 text-white mt-6'>
                    <button className='p-2 bg-green-500 grow smooth rounded-xl'>Post</button>
                    <button onClick={()=>setShow(false)} className='p-2 bg-red-700 grow rounded-xl smooth'>Cancel</button>
                </div>
            </form>
            <main className='w-[1200px] z-0  relative mx-auto mt-[90px] flex '>

                <LeftSide setShow = {setShow} />
                <div className="w-[560px] ml-[320px] ">
                    {children}
                </div>
                <RightSIde />


            </main>
        </div>
    )
}

export default Main