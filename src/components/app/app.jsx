import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = (props) => {
  const film = props.film;
  const filmsName = props.filmsName;

  return (
    <Main film={film} filmsName={filmsName} />
  );

};

App.propTypes = {
  film: PropTypes.object.isRequired,
  filmsName: PropTypes.array.isRequired,
};

export default App;
