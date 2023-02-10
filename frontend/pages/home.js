import Image from 'next/image'
import React from 'react'
import LeftSide from '../components/LeftSide'
import Navbar from '../components/Navbar'
import Search from '../components/Search'


const home = () => {
  return (
    <div className='h-[100vh] flex flex-col  min-h-[100vh] '>
        <Navbar />
        <main className='w-[1200px] relative mx-auto mt-7 flex '>

        {/* sidebar */}
        <LeftSide />
        <div className="flex flex-col  w-[600px] ml-[320px]  gap-3">
            <div className='bg-white p-4 w-full rounded-xl'>
                Hello
            </div>
            </div>


        </main>
    </div>
  )
}

export default home