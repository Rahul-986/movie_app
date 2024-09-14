import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import TopNav from './templates/TopNav'
import DropDown from './templates/DropDown'
import { useState } from 'react'
import axios from "../utils/axios"
import Cards from './templates/Cards'
import Loading from './templates/Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const nav=useNavigate();
  const [category,setCategory]=useState("all");
  const [duration,setDuration]= useState("day");
  const [trending,setTrending]=useState([]);
  const [page,setPage]=useState(1);
  const [HasMore,setHasMore]=useState(true)
  document.title="movie app || Trending " + category.toUpperCase()

  const getTrending=async()=>{
    try{
         const {data}= await axios.get(`/trending/${category}/${duration}?page=${page}`)

         //setTrending(data.results);  
         if(data.results.length>0){
           setTrending((prevState)=>[...prevState,...data.results]);   
           setPage(page+1) 

         }
         else{
           setHasMore(false)
         }
    }
    catch(error){
      console.log("ERROR: " ,error)
    }};
    
const refreshHandler =()=>{
  if(trending.length===0){
   
    getTrending();
  }
  else{
    setPage(1);
    setTrending([]);
    getTrending();
  
  }
}

  useEffect(()=>{
    refreshHandler();
  },[duration,category])

  return  trending.length>0? ( 
    <div  className=' w-screen h-screen '>
      <div className='px-[3%] w-full flex items-center justify-between  '>
     
        <h1 className='text-zinc-400 font-semibold text-3xl'>
        <i onClick={()=>nav(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line"></i>Trending</h1>
        <div className='flex items-center w-[80%] '>
        <TopNav />
        <DropDown 
        title="Category"
        option={["movies","tv","all"]}
        func={(e)=>setCategory(e.target.value)}
        />

       <div className='w-[2%]'></div>
        <DropDown 
        title="Duration"
        option={["day","week"]}
        func={(e)=>setDuration(e.target.value)}
        /> 
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={HasMore}
        loader={<h1>loading...</h1>}>
      <Cards data={trending} title={category}/> 
      </InfiniteScroll>
    </div>
  ):(<Loading/>)
   }

export default Trending
