import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const home = () => {
  return (
    <div className='h-[100vh] flex flex-col  min-h-[100vh] '>
        <Navbar />
        <main className='w-[1200px] relative mx-auto mt-7 flex gap-2'>
            <div className='fixed w-[350px]'>
                <div className='bg-white p-5 rounded-xl w-full flex flex-col'>
                    <div className='hover:bg-slate-200 rounded-xl'></div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default home