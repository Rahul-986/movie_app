import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import DropDown from './templates/DropDown';
import TopNav from './templates/TopNav';
import Loading from './templates/Loading';

document.title = "Movie App | movies "; 

const Movie = () => {  
  const nav = useNavigate();  
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setMovies([]);
    setHasMore(true); // Reset the "hasMore" state
    getMovies();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movies.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-zinc-400 font-semibold text-3xl">
          <i
            onClick={() => nav(-1)}  // Correctly use useNavigate here
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Movie <small className='text-sm text-zinc-600'> ({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            option={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)} // Update category
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={movies} title={category} /> {/* Correct data passed */}
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
