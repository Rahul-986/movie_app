import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import Person from './components/Person'
import MovieDetails from './components/templates/MovieDetails'
import TvDetails from './components/templates/TvDetails'
import PersonDetails from './components/templates/PersonDetails'
import Trailer from './components/templates/Trailer'
import NotFound from './components/templates/NotFound'
import TvTrailer from './components/templates/TvTrailer'


const App = () => {
  return (
    <>
      <div className='bg-[#1F1E24] w-full h-screen flex'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trending' element={<Trending/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/movie' element={<Movie/>}/> 
            <Route path='/movie/details/:id' element={<MovieDetails/>} >
            <Route path='/movie/details/:id/trailer' element={<Trailer/>} />
            </Route>
        
          <Route path='/tv' element={<Tvshows/>}/>
            <Route path='/tv/details/:id' element={<TvDetails/>} > 
            <Route path='/tv/details/:id/trailer' element={<TvTrailer/>} />
               
            </Route>
        
          <Route path='/person' element={<Person/>}/>
            <Route path='/person/details/:id' element={<PersonDetails/>} />
        { /* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </>
  )
}

export default App
