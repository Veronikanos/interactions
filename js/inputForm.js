// import {insertMarkup, showTitleForListOfResults} from './utils.js';
// import {showInvitedBtn} from './invitedGuests.js';
import {jsonApi} from './initPage.js';

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

    // const res = await jsonApi.getUsers();
    // console.log(res);
    // if (!results.length) {
    //   console.log('No results, try another one');
    //   return;
    // }

    // const generateNextId = jsonApi.guestsList.length;

    // console.log(jsonApi.guestsList.length);
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
console.log(searchForm);
searchForm.addEventListener('submit', handleFormSubmit);
