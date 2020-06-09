import React from "react";

import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const film = props.film;

  return (
    <Main film={film} />
  );

};

export default App;
