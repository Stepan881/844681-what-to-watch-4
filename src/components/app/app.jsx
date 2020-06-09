import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  const film = props.film;
 
  return (
    <Main film={film} />
  );
  
}

export default App;