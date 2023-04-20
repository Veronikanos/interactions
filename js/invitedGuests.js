import {Guests} from './service/api.js';
import {insertMarkup} from './utils.js';

export const jsonApi = new Guests();

// export const showInvitedBtn = document.querySelector(
//   '.show-invited__btn'
// );

export const handleClickToUserItem = async (e) => {
  e.preventDefault();

  const getIdFromClickedElement = e.target.closest('li').id;
  console.log(getIdFromClickedElement);

  try {
    const results = await jsonApi.getUserPosts(
      getIdFromClickedElement
    );
    const feedbacksContainerElement =
      document.querySelector('.detailed-info');

    if (!results.length) {
      feedbacksContainerElement.innerHTML = 'No feedbacks yet';
    }

    console.log(results);

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
    console.log('oops');
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
