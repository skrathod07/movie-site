import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState(null);
  useEffect(()=>{
    const fetchMovieDetails=async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/api/movie/${id}`);
            setMovie(response.data);
        } catch (error) {
            console.error('eroor fetching movie detials:',error);
        }
    };
    fetchMovieDetails();

  },[id]);

  if(!movie) return <p>Loading...</p>;
  return (
    <div>
      <div className='movie-details'>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <img src={movie.Poster} alt={movie.Title}/>
        <p>Genre:{movie.Genre}</p>
        <p>Director:{movie.Director}</p>
        <p>Plot: {movie.Plot}</p>
      </div>
    </div>
  )
}

export default MovieDetails
