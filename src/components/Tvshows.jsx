import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import DropDown from './templates/DropDown';
import TopNav from './templates/TopNav';
import Loading from './templates/Loading';

const Tvshows = () => {
  document.title = "movie app || Tvshows";
  const nav = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results && data.results.length > 0) {
        setTv((prevState) => [...prevState, ...data.results]);
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
    setTv([]);
    setHasMore(true); // Reset the "hasMore" state
    getTv();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-zinc-400 font-semibold text-3xl">
          <i
            onClick={() => nav(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          TV Shows <small className="text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            option={["top_rated", "popular", "on_the_air", "airing_today"]}
            func={(e) => setCategory(e.target.value)} // Update category
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={hasMore}
        loader={<Loading />} // Use the Loading component here
      >
        <Cards data={tv} title="tv" /> {/* Correct data passed */}
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
