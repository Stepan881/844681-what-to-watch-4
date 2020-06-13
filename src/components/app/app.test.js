import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};
const FILM_NAMES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      film={FILM}
      filmNames={FILM_NAMES}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

