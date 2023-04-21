import {CustomError} from './errors.js';
import {jsonApi} from './listOfCustomers.js';

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const query = e.target.formInput.value;

  if (!query) {
    throw new CustomError('Empty input');
  }

  try {
    const result = await jsonApi.addUser(query.trim().toLowerCase());
    console.log(result);

    const showTrendingContainer =
      document.querySelector('.search-results');

    const generateNextId =
      showTrendingContainer.childElementCount + 1;

    showTrendingContainer.insertAdjacentHTML(
      'beforeend',
      `<li id=${generateNextId}>${result.name}</li>`
    );

    document.querySelector('#searchField').value = '';
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};

const searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', handleFormSubmit);
