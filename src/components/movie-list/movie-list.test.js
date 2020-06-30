import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import MovieList from './movie-list.jsx';
import films from "../../mocks/films";

const mockStore = configureStore([]);

it(`Render 8 cards`, () => {
  const store = mockStore({
    genre: `All genres`,
    films
  });

  const filmsList = renderer
    .create(
        <Provider store={store}>
          <MovieList films={films} />
        </Provider>)
    .toJSON();

  expect(filmsList).toMatchSnapshot();
});
