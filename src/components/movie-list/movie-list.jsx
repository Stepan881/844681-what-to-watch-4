import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentFilm: null,
    };

    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
  }

  _cardMouseEnterHandler(film) {
    this.setState({currentFilm: film});
  }

  render() {
    const {films} = this.props;

    return (
      <React.Fragment>
        {films.map((film) => (
          <SmallMovieCard
            key={film.name}
            film={film}
            onMouseEnter={this._cardMouseEnterHandler}
          />)
        )}
      </React.Fragment>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ).isRequired,
};
