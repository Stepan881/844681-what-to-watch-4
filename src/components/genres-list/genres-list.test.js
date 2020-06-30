import React from "react";
import renderer from "react-test-renderer";

import {GenresList} from "./genres-list.jsx";
import films from "../../mocks/films.js";

it(`render GenresList`, () => {
  const tree = renderer
    .create(
        <GenresList
          genre={`All genres`}
          onClick={()=>{}}
          films={films}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
