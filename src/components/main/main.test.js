import React from "react";
import renderer from "react-test-renderer";

import Main from "./main";

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};
const FILM_NAMES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      film={FILM}
      filmNames={FILM_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
