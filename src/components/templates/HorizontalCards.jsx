import React from 'react'
import { Link } from 'react-router-dom';

const HorizontalCards = ({data}) => {
  return (
    <>
    <div className='w-full h-[40vh] p-5'>
      <div className='mb-5'>
      <h1 className='text-zinc-400 text-3xl font-semibold '>Trending</h1>
      </div>

      <div className='w-[100%] h-[50vh] flex  overflow-y-hidden'>
       {data.map((d,i)=>
      <div key={i} className='min-w-[15%] mr-5 '>
      <img className='w-full h-[55%] object-cover' src={`https://image.tmdb.org/t/p/original${d.backdrop_path ||d.poster_path}`} alt="" />
      <h1 className=' text-xl text-white  font-black'>
                 {
                  d.name||
                  d.title||
                  d.original_title||
                  d.original_name
                  }
            </h1>
         <p className='w-[70%] text-teal-50 mt-3 mb-3'>
      {d.overview.slice(0,100)}...<span className='text-blue-500'>more</span></p>

         
         </div>
        
        
        )}
      </div>
     

    </div>
    </>
  )
}

export default HorizontalCards;
