import {extend} from "./utils.js";
import Genres from "./mocks/consts.js";
import films from "./mocks/films.js";

const initialState = {
  genre: Genres.ALL,
  films,
};

const ActionTypes = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTERED_FILMS: `FILTERED_FILMS`,
};

const ActionCreator = {
  changeGenre: (genre)=>({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre
  }),
  filteredFilms: ()=>({
    type: ActionTypes.FILTERED_FILMS,
    payload: null
  })
};

const getFilteredFilms = (genre) => {
  const allFilms = initialState.films;

  if (genre === Genres.ALL) {
    return allFilms;
  }

  return allFilms.filter((film) => film.genre === genre);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionTypes.FILTERED_FILMS:
      const filteredFilms = getFilteredFilms(state.genre, initialState.films);
      return extend(state, {
        films: filteredFilms
      });
  }
  return state;
};

export {reducer, ActionTypes, ActionCreator};
