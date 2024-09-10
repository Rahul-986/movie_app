import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ data, title }) => {
  return (
    <div className='flex flex-wrap justify-center gap-6 p-4 bg-[#1F1E24]'>
      {data.map((c, i) => (
        <Link
          key={i}
          
          className='w-[20vw] max-w-[300px] overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105'
        >
          <img
            className='w-full h-[40vh] object-cover rounded-t-lg'
            src={`https://image.tmdb.org/t/p/original${c.backdrop_path || c.profile_path || c.poster_path}`}
            alt={c.name || c.title || c.original_title || c.original_name}
          />
          <div className='p-4 bg-gray-800 text-white'>
            <h1 className='font-semibold text-lg truncate'>
              {c.name || c.title || c.original_title || c.original_name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards
