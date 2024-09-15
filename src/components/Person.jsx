import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import DropDown from './templates/DropDown';
import TopNav from './templates/TopNav';
import Loading from './templates/Loading';

const Person = () => {

  document.title="movie app || person shows"
  const nav = useNavigate();  
  const [category, setCategory] = useState("popular");
  const [person , setPerson ] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPerson  = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPerson ((prevState) => [...prevState, ...data.results]);
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
    setPerson ([]);
    setHasMore(true); // Reset the "hasMore" state
    getPerson ();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person .length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[3%] w-full flex items-center justify-between">
        <h1 className="text-zinc-400 font-semibold text-3xl">
          <i
            onClick={() => nav(-1)}  // Correctly use useNavigate here
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          People 
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
         
        </div>
      </div>

      <InfiniteScroll
        dataLength={person .length}
        next={getPerson }
        hasMore={hasMore}
        loader={<h1>loading...</h1>}
      >
        <Cards data={person } title={category} /> {/* Correct data passed */}
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};
export default Person
