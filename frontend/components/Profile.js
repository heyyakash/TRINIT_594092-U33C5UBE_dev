import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { LineChart } from './LineChart'

const ProfileComponent = ({d}) => {
    const [value,setValue] = useState("Send")
    const handleEmail = (e) => {
        e.preventDefault()
        setValue("Sent")
    }
    return (
        d&&
        <div className='bg-white rounded-xl w-full p-4'>
            <div className='flex w-full items-center p-4 gap-4 border-b pb-6'>
                <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8TkdPfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                    <h2 className='text-xl leading-5 font-semibold'>{d.orgname?d.orgname:d.firstname+" "+d.lastname}</h2>
                    <p>{d.type}</p>
                    <p className='text-xs text-slate-700'>{d.orgname?"50 Members":""}</p>
                </div>
                <Link href="/settings" className='bg-slate-300 grid place-items-center p-2 rounded-xl ml-auto'>
                    <AiFillSetting className='text-xl' />
                </Link>
            </div>
            <p className='p-3'>{d.bio}</p>
            {d.orgname?(
                <LineChart />):(<></>)}

            <form className='p-2 flex flex-col gap-3'>
                <h2 className='h2'>Contact</h2>
                <input type="text" className={`form-input ${value==="Sent"?"hidden":""}`} placeholder='Your Name* ' required  />
                <input type="email" className={`form-input ${value==="Sent"?"hidden":""}`} placeholder='Your Email* ' required />
                <textarea type="text " placeholder='Enter Your Message*' rows="5" required className={`form-input ${value==="Sent"?"hidden":""}`} />
                <input type="submit" onClick={(e)=>handleEmail(e)} className='bg-blue-600 rounded-lg p-2 cursor-pointer text-white font-bold' value={value} />
            </form>
        </div>
    )
}

export default ProfileComponent