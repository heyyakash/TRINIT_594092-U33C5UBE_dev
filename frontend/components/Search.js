import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Search = () => {
    const [value,setValue] = useState("")
    const router= useRouter()
    const handleSearch = (e)=>{
        e.preventDefault()
        if(value!==""){
            router.push(`/search/${value}`)
        }
    }
    return (
        <>
            <form>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative w-[500px] flex">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-4 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        value = {value}
                        onChange = {(e)=>setValue(e.target.value)}
                        id="default-search"
                        className="block w-full p-2.5  pl-10 text-sm text-gray-900 border border-gray-300 rounded-[80px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Search NGOs"
                        required=""
                    />
                    <button disabled = {value.length===0?true:false} onClick = {(e)=>handleSearch(e)} className='bg-slate-200 disabled:opacity-20 rounded-[60px] ml-3 px-5'>Search</button>
        
                </div>
                
            </form>
        </>
    )
}

export default Search