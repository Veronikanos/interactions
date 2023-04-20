import {MovieByTitle} from './service/api.js';
import {insertMarkup} from './utils.js';

const searchField = document.querySelector('.searchForm');
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
    document.querySelector('#searchField').value = '';
  } catch (error) {
    console.log('opp');
  }
};

searchField.addEventListener('submit', handleFormSubmit);
