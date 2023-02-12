import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Suggestions from '../../components/Suggestions'

const Search = () => {
    const [data,setData] = useState(null)
    const router = useRouter()
    const {query} = router.query
    useEffect(()=>{
        getData()
        // console.log(data)
    },[query])

    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/filter/${query}`)
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
    data&&
    <div className='w-full flex flex-col gap-3'>
        {data.length!==0?data.map((d)=><Suggestions name = {d.orgname? d.orgname: d.firstname + " " + d.lastname} data = {d} />):(<></>)}
    </div>
  )
}

export default Search