import Image from 'next/image'
import React from 'react'
import LeftSide from '../components/LeftSide'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import RightSIde from '../components/RightSIde'
import Search from '../components/Search'


const home = () => {
    return (
        <div className='flex pb-10 flex-col w-full gap-3'>
            <Post />
            <Post />
        </div>
        // <div className=' flex flex-col relative  min-h-[100vh] '>
        //     <Navbar />
        //     <main className='w-[1200px] z-0  relative mx-auto mt-[90px] flex '>

        //         <LeftSide />
        //         <div className="flex flex-col  w-[560px] ml-[320px]  gap-3">
        //             <Post />
        //             {/* <Post /> */}
        //         </div>
        //        <RightSIde />


        //     </main>
        // </div>
    )
}

export default home