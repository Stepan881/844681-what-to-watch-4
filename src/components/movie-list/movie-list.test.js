import React from "react";
import renderer from "react-test-renderer";

import MovieList from './movie-list.jsx';
import mock from "../../mocks/films.js";

it(`Render 8 cards`, () => {
  const films = renderer
    .create(<MovieList smallFilms={mock.films} />)
    .toJSON();

  expect(films).toMatchSnapshot();
});
