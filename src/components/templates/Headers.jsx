import React from 'react';
import { Link } from 'react-router-dom';

const Headers = ({ data }) => {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original${data.backdrop_path || data.profile_path || data.poster_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className='w-full h-[50vh] flex flex-col justify-end items-start p-8 rounded-lg shadow-lg mb-4 relative'
      >
        <div className='absolute inset-0 bg-black bg-opacity-20 rounded-lg'></div>
        <div className='relative z-10'>
          <h1 className='text-4xl text-white font-black mb-3'>{data.name || data.title || data.original_title || data.original_name}</h1>
          <p className='text-teal-50 mb-3'>
            {data.overview.slice(0, 200)}...
            <Link to={`/${data.media_type}/details/${data.id}`} className='text-gray-500 hover:underline'>
              more
            </Link>
          </p>
          <div className='flex items-center text-white'>
            <i className='ri-megaphone-fill text-[#6556CD] mr-2'></i>
            {data.release_date || "No Info"}
            <i className='ri-album-fill text-[#6556CD] ml-4 mr-2'></i>
            {data.media_type ? data.media_type.toUpperCase() : ''}
          </div>
          <Link
            to='#'
            className='bg-[#6556CD] hover:bg-[#5545b8] text-white font-semibold py-2 px-4 rounded mt-5 inline-block transition duration-300 ease-in-out transform hover:scale-105'
          >
            Watch Trailer
          </Link>
        </div>
      </div>
    </>
  );
};

export default Headers;
