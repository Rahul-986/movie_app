import React, { useEffect, useState } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import axios from '../utils/axios';
import Headers from './templates/Headers';
import HorizontalCards from './templates/HorizontalCards';

const Home = () => {
  document.title="Movie App| Homepage";

  const [wall,setWall]=useState("")
  const [trending,setTrending]=useState("")


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
         const {data}= await axios.get(`/trending/all/day`)

         setTrending(data.results);      
    }
    catch(error){
      console.log("ERROR: " ,error)
    }};


  useEffect(()=>{

  !wall&&getWall();

  !trending&&getTrending();

  },[]);
  console.log(trending)

  return wall && trending? (
   <>

<SideNav/>
  <div className='h-full w-[80%] overflow-auto overflow-x-hidden  '>

  <TopNav/>
  <Headers data={wall}/>
  <HorizontalCards data={trending}/>
  </div>
      
     </>
  ):<h1>loading</h1>
}

export default Home
