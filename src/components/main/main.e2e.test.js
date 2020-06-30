import React from "react";
import {shallow} from "enzyme";

import Main from "./main";
import films from "../../mocks/films.js";

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

it(`Should 'show more' button be pressed`, () => {
  const onShowMoreButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <Main
        film={FILM}
        films={films}
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const showMoreButton = welcomeScreen.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);
  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});

