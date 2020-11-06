import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Nos devuelve los detalles de cada película en los listados extras */

const Movie = ({ movie }) => {

    return <div className="movie-container">
        <div className="movie">
            <img className="img-info-movie" src={"http://image.tmdb.org/t/p/w500" + movie.poster_path} alt=""></img>
            <div className="info-container">
            <h3>{movie.title}</h3>
            <h5>Título Original:</h5>
            <span className="overview-info-movie">{movie.original_title}</span>
            <h5>Overview:</h5>
            <span className="text-info-movie">{movie.overview}</span>
            <h5>Nº Votos:</h5>
            <span className="text-info-movie">{movie.vote_count}</span>
            <h5>Fecha de lanzamiento:</h5>
            <span className="text-info-movie">{movie.release_date}</span>
            </div>
        </div>


    </div>
}
export default Movie;