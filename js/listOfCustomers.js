import {Customers} from './service/api.js';
import {insertMarkup} from './utils.js';

export const jsonApi = new Customers();

export const handleClickToUserItem = async (e) => {
  e.preventDefault();

  const getIdFromClickedElement = e.target.closest('li').id;

  try {
    const results = await jsonApi.getUserPosts(
      getIdFromClickedElement
    );
    const feedbacksContainerElement =
      document.querySelector('.feedbacks');

    if (results.length === 0) {
      feedbacksContainerElement.innerHTML =
        'No feedbacks yet from this customer';
      return;
    }

    const markup = insertMarkup(results);
    feedbacksContainerElement.innerHTML = markup.join('');
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};

const handleShowCustomersList = async () => {
  try {
    const results = await jsonApi.getCustomers();
    const usersContainerElement =
      document.querySelector('.search-results');

    const markup = insertMarkup(results, 'users');
    usersContainerElement.innerHTML = markup.join('');

    usersContainerElement.addEventListener(
      'click',
      handleClickToUserItem
    );
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};
window.addEventListener(
  'DOMContentLoaded',
  handleShowCustomersList()
);
