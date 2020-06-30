import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import films from "../../mocks/films.js";
import {App} from "../app/app";

const mockStore = configureStore([]);

const onShowMoreButtonClick = (evt) => {
  evt.preventDefault();
};

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

it(`Should Main render correctly`, () => {
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
            onShowMoreButtonClick={onShowMoreButtonClick}
          />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
