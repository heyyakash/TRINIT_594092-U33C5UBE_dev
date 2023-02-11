import React from 'react'
import Search from './Search'
import Image from 'next/image'
import {FiLogOut} from 'react-icons/fi'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const handleLogout = async () => {
        localStorage.removeItem('session')
        router.push('/')
    }
    return (
        <div className='w-full z-[100] fixed top-0 bg-white h-[70px]'>
            <div className='md:w-[1200px] w-full mx-auto  h-full flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Savesocial</h2>
                <Search />
                <div className="flex items-center gap-2">
                <Image src="/favicon.ico" height={35} className="cursor-pointer" width={35} alt="profile" />
                <div onClick={()=>handleLogout()} className='smooth hover:bg-slate-300 rounded-full grid place-items-center cursor-pointer h-10 w-10 '>
                    <FiLogOut />
                </div>
                </div>

            </div>


        </div>
    )
}

export default Navbar