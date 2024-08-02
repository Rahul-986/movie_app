import React from 'react'
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

const HorizontalCards = ({data}) => {
  return (
    <>
    <div className='w-full  p-5  '>
      <div className='mb-5 flex justify-between'>
      <h1 className='text-zinc-400 text-2xl font-semibold '>Trending</h1>

      <DropDown title="Filter" option={["Tv","Movies","all"]}/>
      </div>

      <div className='w-[100%]  flex  overflow-y-hidden'>
       {data.map((d,i)=>
      <div key={i} className='min-w-[15%] mr-5 mb-5 bg-zinc-900'>
      <img className='w-full h-[40%] object-cover ' src={`https://image.tmdb.org/t/p/original${d.backdrop_path ||d.poster_path}`} alt="" />
      <div className='text-white '>
         <h1 className='p-2 text-xl font-semibold'>
                 {
                  d.name||
                  d.title||
                  d.original_title||
                  d.original_name
                  }
            </h1>
         <p className='p-2'>
      {d.overview.slice(0,50)}...<span className='text-zinc-500 '>more</span></p>


      </div>
     
         
       </div>
        
        
        )}
      </div>
     

    </div>
    </>
  )
}

export default HorizontalCards;
