import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './movie';

/* Sacamos los listados de películas según el tipo */
const Movies = props => {
    const movieType =props.match.params.movieType;
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=29dbfac9b5eb19af58fcf9fd88d297a1&language=es-ES`)
    .then(res => setMovies(res.data.results))
    .catch (console.error)
    },[movieType])
    return <div className="movies">
       {/* Tipo de Películas: {movieType}*/}
        {movies?.map(movie =><Movie movie={movie}/>)}
    </div>
}
export default Movies;