import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {App} from "./app.jsx";
import films from "../../mocks/films.js";

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    genre: `All genres`,
    films
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            film={FILM}
            films={films}
          />
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
