import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
    <div className='w-full h-[10vh] relative flex justify-center items-center'>
    <i className="text-zinc-400 text-2xl ri-search-2-line"></i>
   <input  type="text" className="w-[50%] text-white p-5 outline-none border-none bg-transparent" placeholder="Search for movies, TV shows, people..." />
   <i className="text-3xl text-zinc-400 ri-close-fill"></i>

   <div className='w-[50%] h-[50vh] bg-zinc-200 absolute top-[90%]'>
    <Link className='hover:text-black hover:bg-zinc-300 bg-zinc-600 font-semibold w-[100%] flex justify-start p-10 border-b-2 text-zinc-400 items-center '>
    <img src="" alt="" />
      <span>hello everyone</span>
    </Link>
   </div>
    </div>
    </>
  )
}

export default TopNav
