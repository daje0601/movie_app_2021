import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 이 경우에는 movies component가 필요하지 않다고 하는데 왜?


function Movie({ id, year, title, summary, poster}) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="moive__title">{title}</h3>
                <h5 class="moive__year">{year}</h5>
                <p class="moive__summary">{summary}</p>
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
};

export default Movie;