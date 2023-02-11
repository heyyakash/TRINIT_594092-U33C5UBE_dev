import React, { useState } from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { MdCreate } from 'react-icons/md'
import { FcBusinessman, FcManager } from 'react-icons/fc'
import {IoClose } from 'react-icons/io5'

const Signup = () => {
    const [type, setType] = useState('Donor');
    const [interests,setInterests] = useState([])
    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log({...data,type,interests})

    return (
        <div className='w-full md:max-h-[100vh] md:h-[100vh] bg-[url("/login.jpg")] bg-cover grid place-items-center'>

            <div className='lg:w-[500px] p-2 lg:p-5 rounded-md h-[100vh] lg:h-[80vh] overflow-auto w-full bg-white drop-shadow-xl flex justify-center items-center gap-4 flex-col'>
                <MdCreate className='text-4xl text-green-600' />
                <h2 className='text-2xl font-semibold '>I am an..</h2>
                <div className="flex flex-col lg:flex-row p-4 w-[400px] gap-2">
                    <div onClick={() => setType("NGO")} className={`p-2 flex-[1] ${type === "NGO" ? "bg-green-200" : ""} text-green-500 cursor-pointer flex justify-center items-center border-2 rounded-md border-green-500 gap-2`}>
                        <FcBusinessman className='text-xl' />
                        <p>NGO</p>
                    </div>
                    <div onClick={() => setType("Donor")} className={`p-2 flex-[1] ${type === "Donor" ? "bg-green-200" : ""} text-green-500 cursor-pointer flex justify-center items-center border-2 rounded-md border-green-500 gap-2`}>
                        <FcManager className='text-xl' />
                        <p>Donor</p>
                    </div>

                </div>
                <p className='text-sm'>Already have an accound? <span className='text-green-700'><Link href='/login'>Log in!</Link></span></p>
                <hr className='mt-2 w-[80%]' />
                {type === "NGO" ?
                    <>
                        <form id="createForm" onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[400px] flex-wrap gap-2' >
                            <div className='flex flex-wrap gap-2'>
                                <input type="text" {...register('orgname', { required: true })} className='form-input' required placeholder="Name of ngo" />
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <input type="text" {...register('firstname', { required: true })} className='form-input' required placeholder="Founder's firstname" />
                                <input type="text" {...register('lastname', { required: true })} className='form-input' required placeholder="Founder's firstname" />
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <input type="text" {...register('bio', { required: true })} className='form-input' required placeholder='Say Something about your organisation' />
                            </div>

                            <div className='flex flex-wrap gap-2'>
                                <input type="number" {...register('age', { required: true })} className='form-input' min="18" required placeholder='Age' />

                            </div>
                            <input type="email" id="email" {...register('email', { required: true })} required placeholder='Email Address' className='form-input' />
                            <input type="password" id="password" {...register('password', { required: true })} required placeholder='Password' className='form-input' />
                            <select name="Type of NGO" id="typeofNGO" className="form-input" {...register('ngotype',{required:true})}>
                                <option value="">What kind of problem are your working on?</option>
                                <option value="Health">Health</option>
                                <option value="Environment">Environment</option>
                                <option value="Women">Women's Health</option>
                                <option value="Children">Child's Health</option>
                                <option value="Poverty">Poverty</option>
                                <option value="Education">Education</option>
                                <option value="Hunger">Hunger</option>
                                <option value="Hunger">Other</option>
                            </select>


                            <button type='submit' className='form-btn'>Sign Up</button>
                        </form>
                    </>
                    :
                    <>

                        <form id="createForm" onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[400px] flex-wrap gap-2' >
                            <div className='flex flex-wrap gap-2'>
                                <input type="text" {...register('firstname', { required: true })} className='form-input' required placeholder='First Name' />
                                <input type="text" {...register('lastname', { required: true })} className='form-input' required placeholder='Last Name' />
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <input type="text" {...register('bio', { required: true })} className='form-input' required placeholder='Say Something about your self' />
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <input type="number" className='form-input' {...register('age', { required: true })} min="18" required placeholder='Age' />
                                <select {...register('gender', { required: true })} className='form-input' name="gender" id="gender">
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div>
                                <select name="interests" onChange={(e)=>setInterests([...interests,e.target.value])} required label="Choose Your Interests" className='form-input' id="interests">
                                    <option value="">Choose your Interests</option>
                                    <option value="Health">Health</option>
                                    <option value="Education">Education</option>
                                    <option value="Poverty">Poverty</option>
                                    <option value="Women">Women's Health</option>
                                    <option value="Children">Child's Health</option>
                                    <option value="Hunger">Hunger</option>
                                    <option value="Environment">Environment</option>
                                </select>
                                <div className='flex my-2 flex-wrap gap-2'>
                                    {interests.map((element) => {
                                        return (<>
                                            <div key={element} className='pl-2 gap-[5px] flex items-center bg-green-300 rounded-xl'>{element}
                                                <div onClick={(element) => removeInterest(element)} className='p-[.4rem] cursor-pointer ml-auto rounded-full bg-green-200 '>
                                                    <IoClose className="text-sm" />
                                                </div>
                                            </div>
                                        </>)
                                    })}
                                </div>
                            </div>
                            <input type="tel" {...register('mobile', { required: true })} className="form-input" required placeholder="Phone Number" />
                            <input type="email" {...register('email', { required: true })} className='form-input' required placeholder='Email Address' />
                            <input type="password" {...register('password', { required: true })} className='form-input' required placeholder='Password' />
                            <button type='submit' className='form-btn'>Sign Up</button>
                        </form>
                    </>}
            </div>
        </div>
    )
}



Signup.getLayout = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default Signup