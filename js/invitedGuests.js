import {insertMarkup} from './utils.js';
// import {showTitleForListOfResults} from './utils.js';
import {jsonApi} from './initPage.js';

export const showInvitedBtn = document.querySelector(
  '.show-invited__btn'
);

export const handleClickToUserItem = async (e) => {
  e.preventDefault();

  const getIdFromClickedElement = e.target.closest('li').id;
  console.log(getIdFromClickedElement);

  try {
    const res = await jsonApi.getUserPosts(getIdFromClickedElement);
    console.log(res);
  } catch (error) {
    throw new Error(error);
  }
};

const handleShowGuestsList = async () => {
  // e.preventDefault();
  // showInvitedBtn.disabled = true;

  try {
    const results = await jsonApi.getUsers();
    console.log(results);
    // if (!results.length) {
    //   console.log('Empty...');
    //   return;
    // }
    const usersContainerElement =
      document.querySelector('.search-results');

    const markup = insertMarkup(results);
    usersContainerElement.innerHTML = markup.join('');

    usersContainerElement.addEventListener(
      'click',
      handleClickToUserItem
    );

    // showTitleForListOfResults('trending');

    console.log(results);

    // hideTrendingBtn.disabled = false;
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

handleShowGuestsList();

// showInvitedBtn.addEventListener('click', handleShowGuestsList);
