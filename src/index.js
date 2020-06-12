import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};
const FILMS_NAME = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDom.render(
    <App
      film={FILM} filmsName={FILMS_NAME}
    />,
    document.querySelector(`#root`)
);
