import React from "react";


const Main = (props) => {
  const film = props.film;
 
  return (
    <section class="movie-card">
      <div class="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 class="visually-hidden">WTW</h1>

      <header class="page-header movie-card__head">
        <div class="logo">
          <a class="logo__link">
            <span class="logo__letter logo__letter--1">W</span>
            <span class="logo__letter logo__letter--2">T</span>
            <span class="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div class="user-block">
          <div class="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div class="movie-card__wrap">
        <div class="movie-card__info">
          <div class="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div class="movie-card__desc">
            <h2 class="movie-card__title">{film.NAME}</h2>
            <p class="movie-card__meta">
              <span class="movie-card__genre">{film.GENRE}</span>
              <span class="movie-card__year">{film.YEAR}</span>
            </p>

            <div class="movie-card__buttons">
             <button class="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button class="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

};


export default Main;