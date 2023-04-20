import {movieApi} from './script.js';

export const handleClickToMovieItem = (e) => {
  e.preventDefault();

  const getIdFromClickedElement = e.target.closest('li').id;
  console.log(getIdFromClickedElement);

  try {
    const res = movieApi.getMovieDetailsByID(getIdFromClickedElement);
    console.log(res);
  } catch (error) {
    throw new Error(error);
  }
};

export const insertMarkup = (res) => {
  const showTrendingContainer =
    document.querySelector('.search-results');

  // 	//clear form container before previous query.
  // showTrendingContainer.innerHTML = '';

  const markup = [];
  res.map((movie) => {
    markup.push(
      `<li id=${movie.id}><a href=''>${movie.title}</a></li>`
      //  markup.push(`<li id=${movie.id}>${movie.title}
    );
  });

  showTrendingContainer.innerHTML = markup.join('');

  showTrendingContainer.addEventListener(
    'click',
    handleClickToMovieItem
  );
};

export const showTitleForListOfResults = (type) => {
  // show title for searched list
  const searchedListTitle = document.querySelector(
    '.searched-list-title'
  );

  let title =
    type === 'trending'
      ? 'Trending movies of the day:'
      : 'Results for your query:';

  searchedListTitle.innerHTML = title;
};
