
import './App.css'
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import axios from 'axios';
function App() {

  // searchbar done, css done
  // movie list done, css pending
  // movie details pending...

    const [movies,setMovies]=useState([]);

    useEffect(()=>{
      const fetchPopularMovies=async()=>{
        try {
          const response = await axios.get('http://localhost:5000/api/popular');
          setMovies(response.data.Search || []);
        
        } catch (error) {
          console.error('error in fetching pop moives',error);
          
        }
      };
      
      fetchPopularMovies();
    },[]);

    const fetchMovies = async(query)=>{
      try {
        const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('error fetching movies',error);
      }
    }

  return (
    <Router>
      <div className='container'>
        <h1 className='hero-heading'>Movie Search</h1>
        <Routes>
          <Route path='/' element={
            <>
            <SearchBar onSearch={fetchMovies}/>
            <MovieList movies={movies}/>
            </> 
            }
           />
           
          <Route path='/movie/:id' element={
            <MovieDetails/>
            }
          />

        </Routes>
      </div>

    </Router>
  )
}

export default App
