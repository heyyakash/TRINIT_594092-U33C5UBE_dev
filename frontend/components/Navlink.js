import Link from 'next/link'
import React from 'react'

const Navlink = ({text,icon}) => {
    return (
        <Link href = {`${text.toString().toLowerCase()}`} className='navlink'>
            {icon}
            <p className='text-xl'>{text}</p>
        </Link>
    )
}

export default Navlink