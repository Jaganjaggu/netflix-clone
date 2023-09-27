import React from 'react'
import { useState, useEffect } from 'react';
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Banners.css'

function Banners({fetchUrl}) {
    const [movie,setMovie]=useState({})
  // console.log(fetchUrl);
  const base_url = "https://image.tmdb.org/t/p/original/";


const fetchData=async()=>{
const {data}=await tmdbAxiosInstance.get(fetchUrl)
// console.log(response);
setMovie(data.results[Math.floor(Math.random()*data.results.length)])
}
// console.log(allMovies);
useEffect(()=>{
fetchData()
},[])
  return (
    <div style={{
        height:'600px',
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
        backgroundAttachment:'fixed'
    }}>
        <div className='banner_content'>
            <h1>{movie?.name}</h1>
            <h2>`{movie?.overview?.slice(0,280)}...`</h2>
        </div>

    </div>
  )
}

export default Banners;