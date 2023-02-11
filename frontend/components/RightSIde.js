import React from 'react'
import Suggestions from './Suggestions'
import data from '../data.json'

const RightSIde = () => {
    return (
        <div className='fixed ml-[900px] w-[300px] flex flex-col'>
            <div className='w-full p-4 bg-white rounded-xl'>
                <p className='font-semibold'>Suggested</p>
                <div className='flex flex-col gap-3 mt-4'>
                    
                      
                    {data.map((d)=>{
                        return(
                            <Suggestions name = {`${d.orgname?d.orgname:d.firstname+" "+d.lastname}`} image = {d.image} type = {d.type} key = {d._id} id = {d._id} />
                        )
                    })}

{/* 
                      <Suggestions name={"Aditya Khattri"} type = "Donor" />
                      <Suggestions name={"Divyesh Jain"} type = "Donor" />
                      <Suggestions name={"Uttkarsh Raj"} type = "Donor" />
                      <Suggestions name={"Happy Life"} type = "NGO" />
                      <Suggestions name={"Sed Life"} type = "NGO" /> */}


                    </div>
                </div>
            </div>
        // </div>
    )
}

export default RightSIde