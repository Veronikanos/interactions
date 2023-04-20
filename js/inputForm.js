import {insertMarkup, showTitleForListOfResults} from './utils.js';
import {showInvitedBtn} from './invitedGuests.js';
import {jsonApi} from './initPage.js';

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const query = e.target.formInput.value;

  if (!query) {
    console.log('empty input');
    return;
  }

  try {
    const results = await jsonApi.addUser(query.trim().toLowerCase());
    console.log(results);

    // const res = await jsonApi.getUsers();
    // console.log(res);
    // if (!results.length) {
    //   console.log('No results, try another one');
    //   return;
    // }
    insertMarkup(jsonApi.guestsList);

    // clear input field and make active "show trending" button
    document.querySelector('#searchField').value = '';
    // showInvitedBtn.disabled = false;

    // showTitleForListOfResults();
  } catch (error) {
    throw new Error(error);
  }
};

const searchForm = document.querySelector('.searchForm');
console.log(searchForm);
searchForm.addEventListener('submit', handleFormSubmit);
