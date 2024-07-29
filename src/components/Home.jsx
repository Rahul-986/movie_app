import React, { useEffect, useState } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import axios from '../utils/axios';
import Headers from './templates/Headers';

const Home = () => {
  document.title="Movie App| Homepage";

  const [wall,setWall]=useState("")


  const getWall=async()=>{
  try{
       const {data}= await axios.get(`/trending/all/day`)
       const randomValue= data.results[(Math.random()*data.results.length).toFixed()];
       setWall(randomValue);      
  }
  catch(error){
    console.log("ERROR: " ,error)
  }
  }
  console.log(wall)
  useEffect(()=>{
  !wall&&getWall()
  },[]);

  return wall ?(
   <>

<SideNav/>
  <div className='h-full w-[80%]  '>

  <TopNav/>
  <Headers data={wall}/>
  </div>
      
     </>
  ):<h1>loading</h1>
}

export default Home
