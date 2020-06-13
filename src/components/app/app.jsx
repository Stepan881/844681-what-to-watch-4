import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const showMoreButtonClick = () => {};

const App = (props) => {
  const film = props.film;
  const filmNames = props.filmNames;

  return (
    <Main
      film={film}
      filmNames={filmNames}
      onShowMoreButtonClick={showMoreButtonClick}
    />
  );

};

App.propTypes = {
  film: PropTypes.object.isRequired,
  filmNames: PropTypes.array.isRequired,
};

export default App;
