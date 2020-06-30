import {reducer, ActionTypes, ActionCreator} from "./reducer.js";
import Genres from "./mocks/consts.js";
import films from "./mocks/films.js";

it(`The initial state when loading the application.`, ()=>{
  expect(reducer(undefined, {})).toEqual({
    genre: Genres.ALL,
    films,
  });
});

it(`Change genre`, ()=>{
  expect(reducer({
    genre: Genres.ALL,
    films,
  }, {
    type: ActionTypes.CHANGE_GENRE,
    payload: Genres.COMEDIES
  })).toEqual({
    genre: Genres.COMEDIES,
    films,
  });
});

it(`Selected Category`, ()=>{
  expect(reducer({
    genre: Genres.COMEDIES,
    films,
  }, {
    type: ActionTypes.FILTERED_FILMS,
    payload: null
  })).toEqual({
    genre: Genres.COMEDIES,
    films: [{
      img: `img/the-grand-budapest-hotel-poster.jpg`,
      name: `The Grand Budapest Hotel`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Comedies`,
    }],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator change genre`, () => {
    expect(ActionCreator.changeGenre(Genres.COMEDIES)).toEqual({
      type: ActionTypes.CHANGE_GENRE,
      payload: Genres.COMEDIES,
    });
  });

  it(`Action creators filter films`, ()=>{
    expect(ActionCreator.filteredFilms()).toEqual({
      type: ActionTypes.FILTERED_FILMS,
      payload: null,
    });
  });
});
