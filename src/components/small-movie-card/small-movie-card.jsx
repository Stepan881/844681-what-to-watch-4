import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.TIMEOUT = 1000;
    this.state = {
      isPlaying: false,
      timeoutId: null,
    };
  }

  render() {
    const {film} = this.props;
    return (
      <article
        onMouseEnter={this._onMouseEnter.bind(this)}
        onMouseLeave={this._onMouseLeave.bind(this)}
        className="small-movie-card catalog__movies-card">
        <VideoPlayer
          film={film}
          isPlaying={this.state.isPlaying}
        />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    );
  }

  _onMouseEnter() {
    const timerId = setTimeout(() => {
      this.setState({
        isPlaying: true,
      });
    }, this.TIMEOUT);

    this.setState({
      timeoutId: timerId,
    });
  }

  _onMouseLeave() {
    clearTimeout(this.state.timeoutId);

    this.setState({
      isPlaying: false,
      timeoutId: null,
    });
  }
}

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
