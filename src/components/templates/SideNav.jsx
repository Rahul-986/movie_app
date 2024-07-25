import React from 'react'

const SideNav = () => {
  return (
  <>
  <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
    <h1 className='flex space-x-1 text-white font-bold mr-2'> 
     <img src="/tv-fill.svg" height="26" width="26" alt="" />
     <span className='text-xl'>Movie App</span>
    </h1>
    <nav>
      <h1 className='text-white text-lg my-10 font-semibold'>New Feeds</h1>
    </nav>
  </div>
  </>
  )
}




export default SideNav
