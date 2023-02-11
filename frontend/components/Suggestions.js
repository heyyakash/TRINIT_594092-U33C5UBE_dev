import Link from 'next/link'
import React, { useEffect } from 'react'

const Suggestions = ({ name, id,type,image ,data}) => {
    // useEffect(()=>{})
    return (
        data&&
        <Link href = {`/view/${data._id}`} className = "w-full">
        <div className='flex bg-slate-100 cursor-pointer p-3 gap-3 items-center rounded-xl'>
            <div className='w-10 h-10 rounded-full bg-black overflow-hidden'>
                <img src={image || "https://picsum.photos/200"} alt="" />

            </div>

            <div className='flex flex-col'>
                <p className='text-black text-sm font-semibold'>{name}</p>
                <p className='text-slate-600  text-sm -mt-1'>{type}</p>
            </div>
        </div>
        </Link>
    )
}

export default Suggestions