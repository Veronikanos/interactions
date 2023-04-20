import {insertMarkup} from './utils.js';
// import {showTitleForListOfResults} from './utils.js';
import {jsonApi} from './initPage.js';

export const showInvitedBtn = document.querySelector(
  '.show-invited__btn'
);

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
    insertMarkup(results);

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
