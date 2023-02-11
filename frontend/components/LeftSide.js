import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdSettings} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FaSearch} from 'react-icons/fa'
import Navlink from '../components/Navlink'

const LeftSide = ({setShow}) => {
  return (
    <div className='fixed w-[300px] '>
    <div className='bg-white p-5 rounded-xl w-full flex gap-3 flex-col'>
        <Navlink icon = {<AiFillHome />} text = "Home" /> 
        <Navlink icon = {<CgProfile />} text = "Profile" /> 
        <Navlink icon = {<FaSearch />} text = "Find" /> 
        <Navlink icon = {<MdSettings />} text = "Settings" /> 
        <div onClick={()=>setShow(true)} className='bg-green-500 rounded-xl text-white hover:text-green-500 hover:bg-white smooth p-3 grid place-items-center font-semibold cursor-pointer text-xl'>Post</div>
    </div>
    <div className='bg-white p-5 mt-7 rounded-xl min-h-[400px] w-full flex gap-3 flex-col'>
        <p className='font-semibold text-xl '>Recent Posts</p>
        <div className=' grow text-gray-300 grid place-items-center'>
            No Recent Posts
        </div>
    </div>
</div>
  )
}

export default LeftSide