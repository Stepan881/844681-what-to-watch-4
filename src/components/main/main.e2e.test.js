import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main";

const FILM = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};
const FILM_NAMES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should 'show more' button be pressed`, () => {
  const onShowMoreButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <Main
        film={FILM}
        filmNames={FILM_NAMES}
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const showMoreButton = welcomeScreen.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);
  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});

