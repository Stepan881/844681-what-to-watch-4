import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    const {film} = this.props;
    const type = `video/mp4`;
    const muted = true;

    return (
      <video className="small-movie-card__image" width="280" height="175"
        poster={film.img}
        ref={this._videoRef}
        muted={muted}
      >
        <source
          src={film.preview}
          type={type}
        />
      </video>
    );
  }
  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
