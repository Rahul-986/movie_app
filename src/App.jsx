import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import Person from './components/Person'
import MovieDetails from './components/templates/movieDetails'
import TvDetails from './components/templates/tvDetails'
import PersonDetails from './components/templates/personDetails'


const App = () => {
  return (
    <>
      <div className='bg-[#1F1E24] w-full h-screen flex'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trending' element={<Trending/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/movie' element={<Movie/>}> 
            <Route path='/movie/details/:id' element={<MovieDetails/>} />
          </Route>
          <Route path='/tvshows' element={<Tvshows/>}>
            <Route path='/tvshows/details/:id' element={<TvDetails/>} />
          </Route>
          <Route path='/person' element={<Person/>}>
            <Route path='/person/details/:id' element={<PersonDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
