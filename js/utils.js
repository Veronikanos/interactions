export const insertMarkup = (res) => {
  const markup = [];
  res.map((data, index) => {
    markup.push(
      `<li id=${index + 1}>${data.name}</li>`
      //  markup.push(`<li id=${movie.id}>${movie.title}
    );
  });
  return markup;
};

// export const showTitleForListOfResults = (type) => {
//   // show title for searched list
//   const searchedListTitle = document.querySelector(
//     '.searched-list-title'
//   );

//   let title =
//     type === 'trending'
//       ? 'Trending movies of the day:'
//       : 'Results for your query:';

//   searchedListTitle.innerHTML = title;
// };
