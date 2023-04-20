import {MovieByTitle} from './service/api.js';
import {insertMarkup, showTitleForListOfResults} from './utils.js';
import {showTrendingBtn} from './trending-movies.js';

const searchForm = document.querySelector('.searchForm');
const movieByTitle = new MovieByTitle();

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const query = e.target.formInput.value;

  if (!query) {
    console.log('empty input');
    return;
  }

  try {
    const {results} = await movieByTitle.searchMovieByTitle(
      query.trim().toLowerCase()
    );
    if (!results.length) {
      console.log('No results, try another one');
      return;
    }
    insertMarkup(results);

    // clear input field and make active "show trending" button
    document.querySelector('#searchField').value = '';
    showTrendingBtn.disabled = false;

    showTitleForListOfResults();
  } catch (error) {
    throw new Error(error);
  }
};

searchForm.addEventListener('submit', handleFormSubmit);
