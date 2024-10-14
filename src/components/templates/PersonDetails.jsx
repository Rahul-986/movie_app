import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadperson, removeperson } from "../../store/actions/personsActions"
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import HorizontalCards from '../../components/templates/HorizontalCards';
import DropDown from "./DropDown"
import Loading from './Loading';

const PersonDetails = () => {
  const {pathname}=useLocation();
 const nav=  useNavigate();
  const {id} = useParams();
  const {info} =useSelector((state)=>state.person)
  const dispatch = useDispatch();
  const [category,setcategory]=useState("movie")
  useEffect(()=>{
   dispatch(asyncloadperson(id))
   return ()=>{
    dispatch(removeperson());
   }
  },[id])
  return info ? (
    <div className='px-[15%] w-screen h-[190vh] bg-[#1F1E24] overflow-y-clip overflow-x-hidden'>
      <nav className='w-full h-[10vh] flex items-center text-lg text-zinc-100'>
      <Link onClick={()=>nav(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line -ml-[15%]"></Link>


       {/*part 2 left poster and details */}
      <div className='w-full flex  '>
        <div className='w-[20%] mt-[50%] ml-[5.5%]'>
          <img
            className='mt-[100%] h-[40vh]  object-cover  shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]'
            src={`https://image.tmdb.org/t/p/original${info.detail.poster_path || info.detail.profile_path}`}
            alt=""
          />
            <hr className='mt-5 mb-3 border-none h-[1px] bg-zinc-400 -ml-1'/>
            {/*social media links */}
           <div className='text-2xl text-white  flex gap-x-8'>
           <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
           <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-fill"></i></a>
           <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-fill"></i></a>
           <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-fill"></i></a>

           </div>
           <h1 className='text-zinc-400 font-semibold text-2xl my-3 mt-[1.5px]'>Personal info</h1>
           <h1 className='text-zinc-400 text-sm font-semibold   '>Known for </h1>
           <h1 className='text-zinc-400 text-sm mb-3 '>{info.detail.known_for_department}</h1>

           <h1 className='text-zinc-400 text-sm font-semibold   '>Gender </h1>
           <h1 className='text-zinc-400 text-sm  mb-3'>{info.detail.gender ===2? "male" :"female"}</h1>

           <h1 className='text-zinc-400 text-sm font-semibold   '>Birthday  </h1>
           <h1 className='text-zinc-400 text-sm mb-3 '>{info.detail.birthday}</h1>

           <h1 className='text-zinc-400 text-sm font-semibold   '>Place of Birth</h1>
           <h1 className='text-zinc-400 text-sm mb-3 '>{info.detail.place_of_birth}</h1>

           <h1 className='text-zinc-400 text-sm font-semibold   '>Also known   </h1>
           <h1 className='text-zinc-400 text-sm  '>{info.detail.also_known_as.join(",")}</h1>

     
        </div>
      </div>
            {/*part 3 right details and info*/}
            <div className='w-[80%] -ml-[73%] mt-auto  '>
            <h1 className='text-zinc-300 font-black text-6xl my-3 '>{info.detail.name}</h1>
            <h1 className='text-zinc-400 text-sm font-semibold mt-3 mb-3'>Biography </h1>
            <h1 className='text-zinc-400 text-sm mb-3 '>{info.detail.biography}</h1>
            <h1 className='text-zinc-400 text-sm mb-3 font-semibold '>Movies and TV shows</h1>
            <HorizontalCards data={info.combinedCredits.cast} />
            
            <div className='w-full flex justify-between text-sm'>
              <h1 className='mt-5 text-xl text-zinc-400 font-semibold'>Acting</h1>
              <DropDown title="category" option={["tv","movie"]} func={(e)=>setcategory(e.target.value)}/>
            </div>

            <div className=' list-disc text-zinc-400 w-full mt-5 h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)] border-2 border-zinc-700 p-5'>

             {info[category+"Credits"].cast.map((c,i)=> (
              <li className='hover:text-white text-sm cursor-pointer p-3 hover:bg-[#19191d]'>
                <Link to={`/${category}/details/${c.id}`} className=''>
                <span className='mt-2'>
                  {c.name || c.title || c.original_title ||c.original_name}
                  </span>
                <span className='block ml-5 mt-2'>
                  {c.character && ` character Name : ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}

             
            </div>

            </div>


      
{   /*  
      <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
      <a target='_blank' href={https://www.wikidata.org/wiki/${info.externalid.wikidata_id}}><i className="ri-earth-fill"></i></a>
      <a target='_blank' href={https://www.imdb.com/title/${info.externalid.imdb_id}/}>IMDB</a>
      */}
     
     </nav> 
    </div>
  ): <Loading />
}

export default PersonDetails