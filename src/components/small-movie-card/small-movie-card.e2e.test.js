import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SmallMovieCard from "./small-movie-card.jsx";

import mock from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`hover over movie`, () => {
  const filmHoverHandler = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard film={mock.films[0]} onMouseEnter={filmHoverHandler} />
  );

  smallMovieCard.simulate(`mouseEnter`);
  expect(filmHoverHandler.mock.calls[0][0]).toEqual(mock.films[0]);
});


