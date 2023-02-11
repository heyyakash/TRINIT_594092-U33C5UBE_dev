import React, { useEffect, useState } from 'react'
import Suggestions from '../components/Suggestions'

const Find = () => {
    const [filter, setFilter] = useState(null)
    // const [type, setType] = useState(null)
    const [data,setData] = useState([])

    useEffect(()=>{
        getData()
        // console.log(data)
    },[filter])

    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/filter/${filter}`)
        const result = await res.json();
        if (result.success!==false) {
            console.log(result)
            setData(result)
        }   
        else{
            setData([])
        }
    }

    return (
        <div className='flex flex-col w-full'>
            <div className="flex flex-col gap-3 box">
                <h2 className='text-xl font-bold'>Find</h2>
                <div className='flex flex-wrap gap-3'>
                    <div className={`navlink border ${filter === "Hunger" ? "active" : ""}`} onClick={() => setFilter("Hunger")}>Hunger Relief</div>
                    <div className={`navlink border ${filter === "Flood" ? "active" : ""}`} onClick={() => setFilter("Flood")}>Flood Relief</div>
                    <div className={`navlink border ${filter === "Poverty" ? "active" : ""}`} onClick={() => setFilter("Poverty")}>Poverty Relief</div>
                    <div className={`navlink border ${filter === "Medical" ? "active" : ""}`} onClick={() => setFilter("Medical")}>Medical Relief</div>
                    <div className={`navlink border ${filter === "Orphanage" ? "active" : ""}`} onClick={() => setFilter("Orphanage")}>Orphanage Relief</div>
                    <div className={`navlink border ${filter === "Women" ? "active" : ""}`} onClick={() => setFilter("Women")}>Women Relief</div>
                    <div className={`navlink border ${filter === "Disaster" ? "active" : ""}`} onClick={() => setFilter("Disaster")}>Disaster Relief</div>
                    <div className={`navlink border ${filter === "Education" ? "active" : ""}`} onClick={() => setFilter("Education")}>Education Relief</div>
                </div>

                {/* <h2 className='h2'>Type</h2>
                <div className='flex flex-wrap gap-3'>
                    <div className={`navlink border ${type === "Donor" ? "active" : ""}`} onClick={() => setType('Donor')}>Donor</div>
                    <div className={`navlink border ${type === "NGO" ? "active" : ""}`} onClick={() => setType('NGO')}>NGO</div>
                </div> */}
                <button className='bg-red-500 p-2 text-white rounded-xl' onClick={() => {
                    setFilter(null)
                    // setType(null)
                }}>Reset</button>
            </div>
            {filter ===null? (
                <div className='box grid place-items-center mt-6'>
                    <p className='text-sm text-gray-400 py-10'>No Results</p>
                </div>) :
                (<div className='mt-6 flex flex-col gap-3'>
                    {data && data.map((d)=>
                        <Suggestions key = {d._id} name={d.orgname} data = {d} />
                    )}
                </div>)}

        </div>
    )
}

export default Find