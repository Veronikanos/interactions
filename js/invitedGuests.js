import {CustomError} from './errors.js';
import {Guests} from './service/api.js';
import {insertMarkup} from './utils.js';

export const jsonApi = new Guests();

// export const showInvitedBtn = document.querySelector(
//   '.show-invited__btn'
// );

export const handleClickToUserItem = async (e) => {
  e.preventDefault();

  const getIdFromClickedElement = e.target.closest('li').id;
  // console.log(getIdFromClickedElement);

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

    // console.log(results);

    const markup = insertMarkup(results);
    feedbacksContainerElement.innerHTML = markup.join('');
  } catch (error) {
    throw new Error(error);
  }
};

const handleShowGuestsList = async () => {
  try {
    const results = await jsonApi.getUsers();
    // console.log(results);
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
window.addEventListener('DOMContentLoaded', handleShowGuestsList());
