import React from "react";
import renderer from "react-test-renderer";

import Main from "./main";
import mock from "../../mocks/films.js";

const onShowMoreButtonClick = (evt) => {
  evt.preventDefault();
};

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      film={mock.FILM}
      smallFilms={mock.films}
      onShowMoreButtonClick={onShowMoreButtonClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
