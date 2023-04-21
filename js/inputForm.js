import {jsonApi} from './listOfCustomers.js';

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const query = e.target.formInput.value;

  if (!query.trim()) {
    document.querySelector('#searchField').value = '';
    document.querySelector('.error-text').innerHTML =
      'Input can not be empty';
    return;
  }

  try {
    const result = await jsonApi.addUser(query.trim().toLowerCase());
    const showTrendingContainer =
      document.querySelector('.search-results');

    const generateNextId =
      showTrendingContainer.childElementCount + 1;

    showTrendingContainer.insertAdjacentHTML(
      'beforeend',
      `<li id=${generateNextId}>${result.name}</li>`
    );
    document.querySelector('.error-text').innerHTML = '';
    document.querySelector('#searchField').value = '';
  } catch (error) {
    alert(error.message);
  }
};

const searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', handleFormSubmit);
