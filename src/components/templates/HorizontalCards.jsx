import React from 'react';
import { Link } from 'react-router-dom';
import noimage from "/noimage.jpg"

const HorizontalCards = ({ data }) => {
  return (
    <div className='w-full flex overflow-x-auto mb-5 space-x-5 p-4'>
      {data.map((d, i) => (
        <Link
        to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className='min-w-[200px] max-w-[220px]  bg-zinc-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl'
        >
          <img
            className='w-full h-[180px] object-cover rounded-t-lg'
            src={d.backdrop_path || d.poster_path ?
              `https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`:noimage}
            alt={d.name || d.title}
          />
          <div className='p-4 text-white'>
            <h1 className='font-semibold text-lg leading-tight truncate'>
              {d.name || d.title || d.original_title || d.original_name}
            </h1>
            <p className='mt-2 text-sm text-gray-300 line-clamp-3'>
              {d.overview.slice(0, 50)}...
              <span className='text-zinc-500 cursor-pointer hover:underline'>more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
