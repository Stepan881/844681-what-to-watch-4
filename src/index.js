import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};
const FILM_NAMES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDom.render(
    <App
      film={FILM} filmNames={FILM_NAMES}
    />,
    document.querySelector(`#root`)
);
