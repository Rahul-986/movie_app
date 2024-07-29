import React from 'react'
import { Link } from 'react-router-dom'

const Headers = ({data}) => {
  
  return (
   <>
 
   <div  style={{
    background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.6)),
    url(https://image.tmdb.org/t/p/original${data.backdrop_path || data.profile_path})`,
    backgroundPosition: "center", 
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat"
  
   
}} 

   className='w-full h-[50vh] flex flex-col justify-end items-start p-[4%] '>
    <h1 className='w-[70%] text-5xl text-white  font-black'>{data.name||data.title||data.original_title||data.original_name}</h1>
    <p className='w-[70%] text-teal-50 mt-3 mb-3'>{data.overview.slice(0,200)}...<Link className='text-blue-500'>more</Link></p>
    <p className='text-white'>
    <i className=" ri-megaphone-fill text-yellow-300 "></i>
    {data.release_date || "No Info"}
    <i class="ri-album-fill text-yellow-300 ml-2"></i>
    {data.media_type.toUpperCase()}
    </p>
    <Link className='bg-[#6556CD] p-4 rounded text-white  mt-5'>Watch trailer</Link>
    </div>
   </>
  )
}

export default Headers
