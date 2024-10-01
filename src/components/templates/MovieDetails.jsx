import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadmovie, removemovie } from '../../store/actions/movieActions';
import HorizontalCards from "../../components/templates/HorizontalCards"
import Loading from './Loading';

const MovieDetails = ({data}) => {
  const {pathname}=useLocation();
 const nav=  useNavigate();
  const {id} = useParams();
  const {info} =useSelector((state)=>state.movie)
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(asyncloadmovie(id))
   return ()=>{
    dispatch(removemovie());
   }
  },[id])
  return info ? (
   <>
   <div  style={{
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.6)), 
          url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
         className='relative w-screen h-[150vh] px-[10%]'>

         {/* part 1 navigation*/}
          <nav className='w-full h-[10vh] flex gap-10 items-center text-lg text-zinc-100'>
      
          <Link onClick={()=>nav(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line"></Link>
          <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
          <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
          <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a>
          </nav>

         {/* part 2 poster and MovieDetails */}
         <div className='w-full flex'>
         <img
            className='h-[60vh]  object-cover rounded-t-lg shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]'
            src={`https://image.tmdb.org/t/p/original${info.detail.poster_path || info.detail.profile_path}`}
            alt=""
          />
        
          <div className='content ml-[5%] text-white top-0 '>
            <h1 className='font-black text-white text-4xl -mt-6'>  {info.detail.name || info.detail.title || info.detail.original_title || info.detail.original_name}
            <small className='text-zinc-300 text-bold text-lg '>({info.detail.release_date.split("-")[0]})</small>
            </h1>

            <div className='flex text-white items-center  mt-3 mb-5 gap-x-3'>
              
             <span className='bg-yellow-600 w-[5vh]   h-[5vh] flex justify-center items-center rounded-full  '>
              {(info.detail.vote_average *10).toFixed()}<sup>%</sup>
              </span>
              <h1 className='text-xl w-[60px] font-semibold leading-6'>user score</h1>
              <h1>{info.detail.release_date}</h1>
              <h1>{info.detail.genres.map((g)=>g.name).join(",")}</h1>
              <h1>{info.detail.runtime}min</h1>

            </div>

           <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>

           <h1 className='text-xl mt-5 mb-3'>Overview</h1>
           <p className='text-sm'>{info.detail.overview}</p>

           <h1 className='text-xl mt-5 mb-3'>Movie Translated</h1>
           <p className='mb-5 text-sm'>{info.translations.join(", ")}</p>

           <Link
           className='p-3 rounded-lg  bg-[#6556CD]'
            to={`${pathname}/trailer`}>
              <i className="ri-play-mini-fill mr-3"></i>
              Play Trailer
            </Link>

          </div>
         
          </div>
          {/* part 3 availabe on platform */}
          <div className='w-[80%] flex flex-col gap-y-5 mt-10'>
           
            {info.watchprovider && info.watchprovider.flatrate && (
                <div className='flex gap-x-12 items-center text-white'>
                  <h1>
                  Available on Platform    :
                  </h1>
                         {info.watchprovider.flatrate.map((w)=>(
                <img 
                title={w.provider_name}
                className='w-[5vh] h-[5vh] object-cover rounded-md '
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />

              ))}
              </div>)}
              {info.watchprovider && info.watchprovider.rent && (
                <div className='flex gap-x-12 items-center text-white'>
                  <h1>
                  Available on Rent      :
                  </h1>
                  {info.watchprovider.rent.map((w)=>(
                <img
                title={w. provider_name}
                className='w-[5vh] h-[5vh] object-cover rounded-md '
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />

              ))}
                  
                </div>)}

             {info.watchprovider && info.watchprovider.buy && (
                <div className='flex gap-x-12 items-center text-white'>
                  <h1>
                  Available to Buy :
                  </h1>
                  {info.watchprovider.buy.map((w)=>(
                <img 
                title={w.provider_name}
                className='w-[5vh] h-[5vh] object-cover rounded-md '
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />

              ))}
                  
                </div>)}
           </div>

             {/*part 4 similar movie and recommdations */}

             <hr className='mt-5 mb-5 border-none h-[1px] bg-zinc-400'/>

             <h1 className=" mt-5 font-bold text-3xl text-white">Recommendations & Similar Stuffs</h1>
             <HorizontalCards data=  {info.recommendations.length>0 ? info.recommendations : info.similar}/>
             <Outlet/>

    </div>
  
   </>
  ) :<div> <Loading/></div>
}

export default MovieDetails;
