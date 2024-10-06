import React from 'react';
 import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TvTrailer = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("tv");

  // Find the video where the name includes "Official Trailer" or "Trailer"
  const ytvideo = useSelector((state)=>state.tv.info.videos.results.find((video) =>
   
    video.type.toLowerCase().includes("trailer")
  )
);
  console.log(ytvideo, pathname.includes("tv"));

  return (
    <>
      <div className='bg-[rgba(0,0,0,0.9)] z-[100] top-0 left-0 absolute h-screen w-screen flex items-center justify-center'>
        <Link
          onClick={() => nav(-1)}
          className="absolute right-[5%] top-[5%] text-white text-3xl hover:text-[#6556CD] ri-close-fill"
        ></Link>
        {ytvideo ? (
          <ReactPlayer
            height={600}
            width={1200}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
            controls={true}
          />
        ) : (
          <div className="bg-[rgba(0,0,0,0.9)] top-0 left-0 h-screen w-screen flex items-center justify-center">
            <p className="text-white">No trailer available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TvTrailer;

