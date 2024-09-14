import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import DropDown from './templates/DropDown';
import TopNav from './templates/TopNav';
import Loading from './templates/Loading';

const Popular = () => {
  document.title = "Movie App | Popular ";
  const nav = useNavigate();

  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
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
    setPopular([]);
    setHasMore(true); // Reset the "hasMore" state
    getPopular();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]); // Reset when category changes

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-zinc-400 font-semibold text-3xl">
          <i
            onClick={() => nav(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          popular
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            option={["tv", "movie"]}
            func={(e) => setCategory(e.target.value)} // Update category
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
