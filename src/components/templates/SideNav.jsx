import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-6">
        <h1 className="flex space-x-1 text-white font-bold">
          <img src="/tv-fill.svg" height="26" width="26" alt="" />
          <span className="text-2xl">Movie App</span>
        </h1>
        <nav className="flex flex-col text-zinc-500 text-lg gap-3">
          <h1 className="text-white text-xl font-semibold mt-10 mb-3">
            New Feeds
          </h1>
          <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg ">
            <i className=" mr-1 ri-fire-fill"></i>Trending
          </Link>
          <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg ">
            <i className="  mr-1 ri-bard-fill"></i>
            Popular
          </Link>
          <Link to="/tvshows" className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg ">
            <i className="mr-1 ri-clapperboard-fill"></i>
            TV Shows
          </Link>
          <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg ">
            <i className="mr-1 ri-movie-2-fill"></i>
            Movies
          </Link>
          <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg ">
            <i className="mr-1 ri-team-fill"></i>
            People
          </Link>

          <hr className="border-none h-[1px] bg-zinc-400" />
          <nav className="flex flex-col text-zinc-500 text-lg gap-3">
            <h1 className="text-white text-xl font-semibold mt-10 mb-3">
              Website Information
            </h1>
            <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg ">
              <i className=" mr-1 ri-information-2-fill"></i>
              About
            </Link>
            <Link className="hover:bg-[#6556CD] hover:text-white duration-300 p-3 rounded-lg ">
              <i className="mr-1 ri-phone-fill"></i>
              Contact Us
            </Link>
          </nav>
        </nav>
      </div>
    </>
  );
};
export default SideNav;
