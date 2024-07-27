import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {

  const [query,setQuery]=useState("")
  console.log(query)
  return (
    <>
    <div className='w-full h-[10vh] relative flex justify-start ml-[15%] items-center  '>
    <i className="text-zinc-400 text-2xl ri-search-2-line"></i>
   <input  onChange={(e)=>{setQuery(e.target.value)}} value={query}  type="text" className="w-[50%] text-white p-5 outline-none border-none bg-transparent" placeholder="Search for movies, TV shows, people..." />
   {query.length>0 && <i onClick={()=>setQuery("")} className="text-3xl text-zinc-400 ri-close-fill"></i>}
   

   <div className='w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto'>
    <Link className='hover:text-black hover:bg-zinc-300 duration-300 bg-zinc-600 font-semibold w-[100%] flex justify-start p-10 border-b-2 text-zinc-300 items-center border-zinc-100 '>
    <img src="" alt="" />
      <span>hello everyone</span>
    </Link>
    

   </div>
    </div>
    </>
  )
}

export default TopNav
