import axios from "axios";

const instance=axios.create({
  baseURL:"https://api.themoviedb.org/3",
   headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGZlNzdlZjRjMzYwMDdlZGRhNzY2Y2Q1Njg4MjZjYyIsIm5iZiI6MTcyMjE0MDEwNS4wOTg4ODMsInN1YiI6IjY2YTU1M2U3M2NhMTc4ODI5M2I4YWFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHd_2xCFBvYbMCtEguSniNVSUBL1zcfgKtcreoI59Cs'
  }

})

export default instance;