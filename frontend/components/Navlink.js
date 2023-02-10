import React from 'react'

const Navlink = ({text,icon}) => {
    return (
        <div className='navlink'>
            {icon}
            <p className='text-xl'>{text}</p>
        </div>
    )
}

export default Navlink