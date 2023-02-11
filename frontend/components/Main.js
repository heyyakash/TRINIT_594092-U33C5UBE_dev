import React from 'react'
import LeftSide from '../components/LeftSide'
import Navbar from '../components/Navbar'
import RightSIde from '../components/RightSIde'

const Main = ({children}) => {
  return (
    <div className=' flex flex-col relative  min-h-[100vh] '>
    <Navbar />
    <main className='w-[1200px] z-0  relative mx-auto mt-[90px] flex '>

      <LeftSide />
      <div className="w-[560px] ml-[320px] ">
        {children}
      </div>
      <RightSIde />


    </main>
  </div>
  )
}

export default Main