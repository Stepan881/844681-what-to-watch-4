import React from "react";
import renderer from "react-test-renderer";

import SmallMovieCard from "./small-movie-card.jsx";

import films from "../../mocks/films.js";

const onMouseEnter = () => {};

it(`MovieCard render card`, () => {
  const card = renderer
    .create(
        <SmallMovieCard
          film={films[0]}
          onMouseEnter={onMouseEnter}
        />)
    .toJSON();

  expect(card).toMatchSnapshot();
});
