import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpg"

const Cards = ({ data, title }) => {
  return (
    <div className='flex flex-wrap justify-center gap-6 p-4 bg-[#1F1E24]'>
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          
          className='relative w-[20vw] max-w-[300px] overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105'
        >
          <img
            className='w-full h-[40vh] object-cover rounded-t-lg'
            src={c.backdrop_path || c.profile_path || c.poster_path ? 
              `https://image.tmdb.org/t/p/original${c.backdrop_path || c.profile_path || c.poster_path}`:noimage}
            alt={c.name || c.title || c.original_title || c.original_name}
          />
          <div className='p-4 bg-gray-800 text-white   '>
            <h1 className='font-semibold text-lg truncate'>
              {c.name || c.title || c.original_title || c.original_name}
            </h1>
            {c.vote_average &&  <div className='bg-yellow-500 w-[5vh]   h-[5vh] flex justify-center items-center rounded-full right-0 bottom-[3%] absolute mr-2'>
              {(c.vote_average *10).toFixed()}<sup>%</sup>
              </div>}
           
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards
