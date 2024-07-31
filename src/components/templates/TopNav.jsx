import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "../../utils/axios";
import noimage from "/noimage.jpg"

const TopNav = () => {

  const [query,setQuery]=useState("")
  const [searches,setSearches]=useState([])
 const getSearches=async()=>{
   try{
    const {data}=await axios.get(`/search/multi?query=${query}`);
    setSearches(data.results)
   }
   catch(error){
    console.log("ERROR :",error)
   }
}

useEffect(()=>{
getSearches()
},[query])
  


  return (
    <>
    <div className='w-full h-[10vh] relative flex justify-start pl-[15%] items-center  '>
    <i className="text-zinc-400 text-2xl ri-search-2-line"></i>
   <input  onChange={(e)=>{setQuery(e.target.value)}} value={query}  type="text" className="w-[50%] text-white p-5 outline-none border-none bg-transparent" placeholder="Search for movies, TV shows, people..." />
   {query.length>0 && <i onClick={()=>setQuery("")} className="text-3xl text-zinc-400 ri-close-fill"></i>}
   

   <div className='w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%] left-[15% ] overflow-auto'>
    
   {searches.map((s, i) => (
        <Link
          key={i}
          to="/some-path" // replace with your actual path
          className="hover:text-black hover:bg-zinc-300 duration-300 bg-zinc-600 font-semibold w-full flex justify-start p-4 border-b-2 text-zinc-300 items-center border-zinc-100"
        >
          <img className='h-[10vh] w-[10vh] object-cover rounded mr-5 shadow-lg' src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original${s.backdrop_path || s.profile_path}`:noimage} alt="" />
          <span>{s.original_title|| s.name ||s.title || s.original_name}</span>
        </Link>
      ))}

    
    

   </div>
    </div>
    </>
  )
}

export default TopNav
