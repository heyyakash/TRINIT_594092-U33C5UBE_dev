import Link from 'next/link'
import React from 'react'
import { AiFillSetting } from 'react-icons/ai'

const Profile = () => {
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className='bg-white rounded-xl w-full p-4'>
                <div className='flex w-full items-center p-4 gap-4 border-b pb-6'>
                    <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                        <img src="https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8TkdPfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl leading-5 font-semibold'>Plant Trees NGO</h2>
                        <p>NGO</p>
                        <p className='text-xs text-slate-700'>0 posts</p>
                    </div>
                    <Link href="/settings" className='bg-slate-300 grid place-items-center p-2 rounded-xl ml-auto'>
                        <AiFillSetting className='text-xl' />
                    </Link>
                </div>
                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi ullam consectetur, fugiat quod corrupti nesciunt, nemo deleniti, eum excepturi tenetur? Inventore architecto error voluptatum eius? Deleniti quisquam officiis quibusdam est doloribus omnis modi nesciunt nostrum! Quis, sequi itaque! Aut.</p>
            </div>


            <div className='bg-white rounded-xl w-full p-4'>
                <h2 className='text-xl font-semibold'>Donations Earned</h2>
                <h1 className='text-[3rem] font-bold text-green-500'>₹ 300000</h1>
            </div>

            <div className='bg-white rounded-xl w-full p-4'>
                <h2 className='text-xl font-semibold'>Donated </h2>
                <h1 className='text-[3rem] font-bold text-green-500'>₹ 30000</h1>
            </div>
        </div>
    // </div >
  )
}

export default Profile