// import {MovieApi} from './service/api.js';
import {TrendingMovies} from './service/api.js';
import {insertMarkup} from './utils.js';

const trendingMovies = new TrendingMovies();
// const movieApi = new MovieApi();

// console.log(fetchTrendingMovies());

const showTrendingBtn = document.querySelector('.show-trending__btn');
const hideTrendingBtn = document.querySelector('.hide-trending__btn');

const handleShowTrending = async (e) => {
  e.preventDefault();
  showTrendingBtn.disabled = true;

  try {
    const {results} = await trendingMovies.getTrendingMovies();
    if (!results.length) {
      console.log('Empty...');
      return;
    }
    insertMarkup(results);

    hideTrendingBtn.disabled = false;
  } catch (error) {
    console.log('oops');
  }

  // trendingMovies.getTrendingMovies().then(({results}) => {
  //   insertMarkup(results);

  // console.log(showTrendingContainer);

  // showTrendingContainer.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const getIdFromClickedElement = e.target.closest('li').id;
  //   // movieApi
  //   //   .getMovieDetailsByID(getIdFromClickedElement)
  //   //   .then(({results}) => {
  //   //     console.log(results);
  //   //   });
  // });
  // });
  // hideTrendingBtn.disabled = false;
};

showTrendingBtn.addEventListener('click', handleShowTrending);
