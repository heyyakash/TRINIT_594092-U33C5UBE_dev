import React, { useEffect, useState } from 'react'
import {AiFillHeart,AiOutlineHeart,AiOutlineShareAlt} from 'react-icons/ai'
import {BiDonateHeart} from 'react-icons/bi'


const Post = ({text,name,image,profile,upi}) => {

    const [show,setShow] = useState(false)
    return (
        name&&
        <section className='bg-white rounded-xl w-full'>
          
            <div className="w-full p-4 ">
                <div className="flex gap-4 border-b pb-4">
                    <img src={profile || `/favicon.ico`} className="h-12 cursor-pointer w-12 rounded-full" alt="" />
                    <div className="flex flex-col flex-grow">
                        <p className="">{name}</p>
                        <p className="text-gray-500 text-sm">{(new Date()).toISOString().split('T')[0]}</p>
                    </div>
                    
                </div>
                {text && (
                    <div className=" p-2 mt-2">
                        <p className='text-black/80 text-md'>{text}</p>
                    </div>
                )}
                <div className="flex flex-col border-b pb-5 flex-grow">
                    {image && (
                        
                            <img src={image} className="w-[99%] rounded-xl mx-auto mt-4  object-cover" alt="" />

                    )}
                </div>

            </div>
            <div className='w-full grid p-2 -mt-5 grid-cols-3 grid-rows-1'>
                    <div className='navlink flex justify-center'>
                        <AiOutlineHeart />
                        <p className='text-sm font-semibold'>Like</p>
                    </div>
                    <div className='navlink flex justify-center'>
                        <AiOutlineShareAlt />
                        <p className='text-sm font-semibold'>Share</p>
                    </div>
                    <div onClick={()=>setShow(!show)} className='navlink flex justify-center'>
                        <BiDonateHeart />
                        <p className='text-sm font-semibold'>Donate</p>
                    </div>

            </div>
            <div className={`${show?"h-[150px]":"h-[0.1px]"} overflow-hidden smooth`}> 
                    <div className="flex px-5">
                        <div className="flex flex-col items-start gap-5">
                            <img src="/upi-icon.svg" className='h-10 ' alt="" />
                            <form>
                                <input type="tel" className='form-input w-[200px]' placeholder='Enter the amount donated' />
                                <input type="submit" value = "Submit" className='bg-green-500 ml-1 rounded-lg cursor-pointer  p-1.5 text-sm text-white' />
                            </form>
                        </div>
                        <img src={`https://upiqr.in/api/qr?name=Akash&vpa=${upi}`} className='h-[70%]  ml-auto mr-3 w-[150px]' alt="" />
                    </div>
            </div>
        </section>
    )
}

export default Post