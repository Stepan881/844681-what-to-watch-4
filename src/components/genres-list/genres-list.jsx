import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "./../../reducer.js";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.allFilms = this.props.films;

    this.getGenresList = this.getGenresList.bind(this);

  }

  getGenresList() {
    const genres = new Set();
    genres.add(`All genres`);
    this.allFilms.forEach((film) => genres.add(film.genre));
    return Array.from(genres).slice(0, genres.size);
  }

  render() {
    const {genre, onClick} = this.props;
    const genresList = this.getGenresList();

    return <ul className="catalog__genres-list">
      {genresList.map((item) => {
        const activeClass = genre === item ? `catalog__genres-item--active` : ``;

        return <li
          key={item}
          className={`catalog__genres-item ${activeClass}`}
          onClick={()=>{
            onClick(item);
          }}
        >
          <a href="#" className="catalog__genres-link">{item}</a>
        </li>;
      })}
    </ul>;
  }
}

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.filteredFilms());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ).isRequired,
};
