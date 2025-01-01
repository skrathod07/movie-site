import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
        {
            movies.map((movie)=>(
                <div className='movie-card' key={movie.imdbID}>
                    <Link to={`/movie/${movie.imdbID}`}>
                        <img src={movie.Poster} alt={movie.Title}/>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </Link>
                </div>
            )
            )
        }
      
    </div>
  )
}

export default MovieList
