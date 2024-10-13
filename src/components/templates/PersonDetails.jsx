import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadperson, removeperson } from "../../store/actions/personsActions"
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import HorizontalCards from '../../components/templates/HorizontalCards';
import Loading from './Loading';

const PersonDetails = () => {
  const {pathname}=useLocation();
 const nav=  useNavigate();
  const {id} = useParams();
  const {info} =useSelector((state)=>state.person)
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(asyncloadperson(id))
   return ()=>{
    dispatch(removeperson());
   }
  },[id])
  return info ? (
    <div className='px-[15%] w-screen '>
      <nav className='w-full h-[10vh] flex items-center text-lg text-zinc-100'>
      <Link onClick={()=>nav(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line -ml-[15%]"></Link>


       {/*part 2 left poster and details */}
      <div className='w-full flex flex-col'>
        <div className='w-[20%] mt-[50%] ml-[5.5%]'>
          <img
            className='mt-[45%] h-[40vh]  object-cover  shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]'
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
           <h1 className='text-zinc-400 text-sm  '>{info.detail.also_known_as[0]}</h1>

     
        </div>
            {/*part 3 right details and info*/}
            <div className='w-[80%]'></div>

      </div>
      
{   /*  
      <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
      <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
      <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a>
      */}
      </nav>

    </div>
  ): <Loading />
}

export default PersonDetails
