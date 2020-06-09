import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

ReactDom.render(
    <App
      FILM={FILM}
    />,
    document.querySelector(`#root`)
);
