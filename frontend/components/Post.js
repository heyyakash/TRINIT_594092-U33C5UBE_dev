import React, { useEffect, useState } from 'react'
import {AiFillHeart,AiOutlineHeart,AiOutlineShareAlt} from 'react-icons/ai'
import {BiDonateHeart} from 'react-icons/bi'

const Post = () => {
    useEffect(()=>{
        setText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi a possimus inventore illo officiis aspernatur error tempora dolorem animi.")
        setName("Akash Sharma")
        setImage("https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60")
    },[])
    const [text,setText] = useState(null)
    const [name,setName] = useState (null)
    const [image,setImage] = useState(null)
    // const [liked,setLiked] =useState(true)
    return (
        name&&
        <section className='bg-white rounded-xl w-full'>
            <div className="w-full p-4 ">
                <div className="flex gap-4 border-b pb-4">
                    <img src={`/favicon.ico`} className="h-12 cursor-pointer  rounded-full" alt="" />
                    <div className="flex flex-col flex-grow">
                        <p className="">{name}</p>
                        <p className="text-gray-500 text-sm">{(new Date()).toString()}</p>
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
                    <div className='navlink flex justify-center'>
                        <BiDonateHeart />
                        <p className='text-sm font-semibold'>Donate</p>
                    </div>

            </div>
        </section>
    )
}

export default Post