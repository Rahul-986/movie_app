import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Trailer = () => {
  const nav=useNavigate()
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  // Find the video where the name includes "Official Trailer"
  const ytvideo = useSelector((state) => state[category]?.info?.videos?.results?.find((video) => 
    video.name.toLowerCase().includes("official trailer")
  ));
  
  console.log(ytvideo);

  return (
    <>
      {/* Only render the video if ytvideo exists and has a valid key */}
      {ytvideo && ytvideo.key ? (
        <div className='bg-[rgba(0,0,0,0.9)] z-[100] top-0 left-0 absolute h-screen w-screen flex items-center justify-center'>
           <Link   onClick={()=>nav(-1)} 
           className="absolute right-[5%] top-[5%] text-white text-3xl  hover:text-[#6556CD] ri-close-fill">
            
           </Link>
          <ReactPlayer
          height={600}
          width={1200}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}  controls={true} />
        </div>
      ) : (
        <div className="bg-[rgba(0,0,0,0.9)] z-[100] top-0 left-0 absolute h-screen w-screen flex items-center justify-center">
          <p className="text-white">No official trailer available</p>
        </div>
      )}
    </>
  );
};

export default Trailer;
