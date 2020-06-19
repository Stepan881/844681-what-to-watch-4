import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main";
import mock from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should 'show more' button be pressed`, () => {
  const onShowMoreButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <Main
        film={mock.FILM}
        smallFilms={mock.films}
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const showMoreButton = welcomeScreen.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);
  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});

