import './trending-movies.js';
import './search-form.js';
import {MovieApi} from './service/api.js';

export const movieApi = new MovieApi();

window.addEventListener('DOMContentLoaded', async () => {
  // if (!movieApi) {
  //   movieApi = new MovieApi();
  // }
  // create guest session so the user can rate movies
  await movieApi.fetchGuestSessionId();
  const res = await movieApi.rateMovie(640146, 9);
  // console.log(res);
});
// https://api.themoviedb.org/3/movie/640145/rating?api_key=2d95e97f255e7635245c1980eab541d3
