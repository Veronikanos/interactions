import {MovieApi} from './service/api.js';
import {TrendingMovies} from './service/api.js';

const trendingMovies = new TrendingMovies();
const movieApi = new MovieApi();

// console.log(fetchTrendingMovies());

const showTrendingBtn = document.querySelector('.show-trending__btn');
const hideTrendingBtn = document.querySelector('.hide-trending__btn');
const showTrendingContainer =
  document.querySelector('.search-results');

const insertMarkup = (res) => {
  const markup = [];
  res.map((movie) => {
    markup.push(`<li id=${movie.id}><a href=''>${movie.title}</a>
		</li>`);
  });

  showTrendingContainer.insertAdjacentHTML(
    'beforeend',
    markup.join('')
  );
};

const handleShowTrending = (e) => {
  e.preventDefault();
  showTrendingBtn.disabled = true;

  trendingMovies.getTrendingMovies().then(({results}) => {
    insertMarkup(results);
    console.log(showTrendingContainer);

    // showTrendingContainer.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   const getIdFromClickedElement = e.target.closest('li').id;
    //   // movieApi
    //   //   .getMovieDetailsByID(getIdFromClickedElement)
    //   //   .then(({results}) => {
    //   //     console.log(results);
    //   //   });
    // });
  });
  hideTrendingBtn.disabled = false;
};

showTrendingBtn.addEventListener('click', handleShowTrending);
