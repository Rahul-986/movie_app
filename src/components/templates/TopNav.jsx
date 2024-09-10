import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "../../utils/axios";
import noimage from "/noimage.jpg";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const [error, setError] = useState(null);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      setError(null); // Clear error if the request is successful
    } catch (error) {
      console.log("ERROR:", error);
      setError("Something went wrong. Please try again later.");
      setSearches([]); // Clear searches if there's an error
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        getSearches();
      } else {
        setSearches([]); // Clear searches when query is empty
      }
    }, 300); // Adjust the debounce delay as needed

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <>
      <div className='w-full h-[10vh] relative flex justify-start pl-[15%] items-center z-[100]'>
        <i className="text-zinc-400 text-2xl ri-search-2-line"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="w-[50%] text-white p-5 outline-none border-none bg-transparent"
          placeholder="Search for movies, TV shows, people..."
        />
        {query.length > 0 && (
          <i onClick={() => setQuery("")} className="text-3xl text-zinc-400 ri-close-fill"></i>
        )}

        {error && (
          <div className="w-[50%] max-h-[50vh] bg-red-200 absolute top-[100%] left-[15%] p-4 z-[1200]">
            {error}
          </div>
        )}

        {!error && searches.length > 0 && (
          <div 
            className='w-[50%]  max-h-[50vh] bg-zinc-200 absolute top-[100%] left-[15%] overflow-auto z-[1200]' 
            style={{ position: 'absolute', zIndex: 1200 }}
          >
            {searches.map((s, i) => (
              <Link
                key={i}
                to="/some-path" // replace with your actual path
                className="hover:text-black hover:bg-zinc-300 duration-300 bg-zinc-600 font-semibold w-full flex justify-start p-4 border-b-2 text-zinc-300 items-center border-zinc-100"
              >
                <img
                  className='h-[10vh] w-[10vh] object-cover rounded mr-5 shadow-lg'
                  src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original${s.backdrop_path || s.profile_path}` : noimage}
                  alt=""
                />
                <span>{s.original_title || s.name || s.title || s.original_name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TopNav;
