import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const showMoreButtonClick = () => {};

const App = (props) => {
  const film = props.film;
  const smallFilms = props.smallFilms;

  return (
    <Main
      film={film}
      smallFilms={smallFilms}
      onShowMoreButtonClick={showMoreButtonClick}
    />
  );

};

export default App;


App.propTypes = {
  film: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    NAME: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
  }).isRequired,
  smallFilms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  ).isRequired,
};


