import React from "react";
import {shallow} from "enzyme";

import SmallMovieCard from "./small-movie-card.jsx";
import films from "../../mocks/films.js";

it(`hover over movie`, () => {
  const filmHoverHandler = SmallMovieCard.prototype._onMouseEnter = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard
        film={films[0]}
      />
  );

  movieCard.simulate(`mouseEnter`);
  expect(filmHoverHandler).toHaveBeenCalledTimes(1);
});

it(`removes the cursor from the movie`, () => {
  const filmLeaveHandler = SmallMovieCard.prototype._onMouseLeave = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard
        film={films[0]}
      />
  );

  movieCard.simulate(`mouseleave`);
  expect(filmLeaveHandler).toHaveBeenCalledTimes(1);
});
