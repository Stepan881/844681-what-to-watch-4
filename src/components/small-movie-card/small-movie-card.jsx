import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {film, onMouseEnter} = props;

  return (
    <article onMouseEnter={() => onMouseEnter(film)}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={film.img} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};
