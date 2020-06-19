import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";
import mock from "../../mocks/films.js";


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      film={mock.FILM}
      smallFilms={mock.films}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

