import {jsonApi} from './invitedGuests.js';

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const query = e.target.formInput.value;

  if (!query) {
    alert('empty input');
    console.log('empty input');
    return;
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
    throw new Error(error);
  }
};

const searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', handleFormSubmit);
