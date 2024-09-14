import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import DropDown from './templates/DropDown';
import TopNav from './templates/TopNav';
import Loading from './templates/Loading';

const Tvshows = () => {
  document.title="movie app || Tvshows"
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
  return (
    <div>
      
    </div>
  )
}

export default Tvshows
