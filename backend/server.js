const express=require('express');
const axios=require('axios');
const cors =require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

const API_KEY= process.env.API_KEY;
// fetch popular movies

app.get('/api/popular',async(req,res)=>{


    try{
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=batman`);
        
        res.json(response.data);

    }catch(error){
        res.status(500).json({error:'failed to fetch movies'});

    }

});

// search movies by query 

app.get('/api/search',async(req,res)=>{

    const query = req.query.q;
    try{

        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        res.json(response.data);
    }catch(error){
        res.status(500).json({error:'failed  to fetch movies'})
    }

});

// fetch moive by imdb id 

app.get('/api/movie/:id',async(req,res)=>{
    const movieId = req.params.id;
    try{

        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`);
        res.json(response.data);
    }catch(error){
        res.status(500).json({error:'failed  to fetch movie detials'})
    }
});

app.listen(PORT,()=>{
    console.log(`server is running on Port: ${PORT}`)
})