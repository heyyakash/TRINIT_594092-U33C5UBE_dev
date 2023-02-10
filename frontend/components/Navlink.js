import React from 'react'

const Navlink = ({text,icon}) => {
    return (
        <div className='hover:bg-slate-100 smooth text-xl items-center  rounded-xl flex gap-3 p-2 cursor-pointer'>
            {icon}
            <p className='text-xl'>{text}</p>
        </div>
    )
}

export default Navlink