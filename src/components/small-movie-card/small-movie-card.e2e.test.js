import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SmallMovieCard from "./small-movie-card.jsx";
import mock from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`hover over movie`, () => {
  const filmHoverHandler = SmallMovieCard.prototype._onMouseEnter = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard
        film={mock.films[0]}
        onMouseEnter={filmHoverHandler}
      />
  );

  movieCard.simulate(`mouseEnter`);
  expect(filmHoverHandler).toHaveBeenCalledTimes(1);
});

it(`removes the cursor from the movie`, () => {
  const filmLeaveHandler = SmallMovieCard.prototype._onMouseLeave = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard
        film={mock.films[0]}
        onMouseLeave={filmLeaveHandler}
      />
  );

  movieCard.simulate(`mouseleave`);
  expect(filmLeaveHandler).toHaveBeenCalledTimes(1);
});
