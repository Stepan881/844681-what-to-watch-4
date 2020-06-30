import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Main from "../main/main.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.showMoreButtonClick = this.showMoreButtonClick.bind(this);
  }

  showMoreButtonClick(evt) {
    evt.preventDefault();
  }

  render() {
    const film = this.props.film;
    const films = this.props.films;

    return (
      <Main
        film={film}
        films={films}
        onShowMoreButtonClick={this.showMoreButtonClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films
});

export {App};
export default connect(mapStateToProps)(App);

App.propTypes = {
  film: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    NAME: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ).isRequired,
};


