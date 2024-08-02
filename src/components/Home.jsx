import React, { useEffect, useState } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import axios from '../utils/axios';
import Headers from './templates/Headers';
import HorizontalCards from './templates/HorizontalCards';
import DropDown from './templates/DropDown';

const Home = () => {
  document.title="Movie App| Homepage";

  const [wall,setWall]=useState(null)
  const [trending,setTrending]=useState(null)
  const [category,setCategory]=useState("all");


  const getWall=async()=>{
  try{
       const {data}= await axios.get(`/trending/all/day`)
       const randomValue= data.results[(Math.random()*data.results.length).toFixed()];
       setWall(randomValue);      
  }
  catch(error){
    console.log("ERROR: " ,error)
  }};
 
  
  const getTrending=async()=>{
    try{
         const {data}= await axios.get(`/trending/${category}/day`)

         setTrending(data.results);      
    }
    catch(error){
      console.log("ERROR: " ,error)
    }};


  useEffect(()=>{
  getTrending();
  !wall&&getWall();
   },[category]);


  return wall && trending? (
   <>

<SideNav/>
  <div className='h-full w-[80%] overflow-auto overflow-x-hidden  '>

  <TopNav/>
  <Headers data={wall}/>
  <div className='flex justify-between'>
      <h1 className='text-zinc-400 text-2xl font-semibold ml-2 mt-2 '>Trending</h1>

      <DropDown 
      title="Filter" 
      option={["tv", "movie", "all"]}
      func={(e)=>setCategory(e.target.value)}
       />
      </div>
  <HorizontalCards data={trending}/>
  </div>
      
     </>
  ):<h1>loading</h1>
}

export default Home
