import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
// import { FaSearch } from "react-icons/fa"
// import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=63737720'

// const movie1 = {
//     "Title": "Enter the Matrix",
//     "Year": "2003",
//     "imdbID": "tt0277828",
//     "Type": "game",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNWM3MDU2MWQtYjdlNC00NDBlLTkyNGMtNjdhYjdlNTdiNTFlXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => { 
        const response = await fetch(`${API_URL}&s=${title}`); //&s= is the search query
        const data = await response.json(); //converts the response to json

        setMovies(data.Search);
    }
    
    useEffect(() => { 
        searchMovies('Matrix');
    }, []);
  
return (
    <div className='app'>
      <h1>Movie World</h1>

        <div className='search'>
            <input
                placeholder='Search for a movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <img
                src={FaSearch}
                alt='search'
                onClick={() => searchMovies(searchTerm)}
            /> */}
        </div>

        {movies?.length > 0
           ? (
            <div className="container"> 
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>   
           ) : (
            <div className="empty">
                <h2>No movies found</h2>    
            </div>
          )}     
      </div>
    // End of container that wraps around movies
    );
 };


export default App;