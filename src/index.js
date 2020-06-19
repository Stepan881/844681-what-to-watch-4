import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';
import FILMS from './mocks/films';

ReactDom.render(
    <App
      film={FILMS.FILM} smallFilms={FILMS.films}
    />,
    document.querySelector(`#root`)
);
