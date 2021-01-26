import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 이 경우에는 movies component가 필요하지 않다고 하는데 왜?


function Movie({ id, year, title, summary, poster, genres}) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="moive__title">{title}</h3>
                <h5 class="moive__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <span key={index} className="genres__genre">  {genre }  </span>
                    ))}
                </ul>
                <p class="moive__summary">{summary.slice(0, 140)}...</p>
                
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;