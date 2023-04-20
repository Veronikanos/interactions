export const insertMarkup = (res) => {
  const showTrendingContainer =
    document.querySelector('.search-results');

  // 	//clear form container before previous query.
  // showTrendingContainer.innerHTML = '';

  const markup = [];
  res.map((movie) => {
    // markup.push(`<li id=${movie.id}><a href=''>${movie.title}</a>
    markup.push(`<li id=${movie.id}>${movie.title}
		</li>`);
  });

  showTrendingContainer.innerHTML = markup.join('');
};

// export const checkResponse = (res) => {
//   if (!res.length) {
//     console.log('No results, try another one');
//     return;
//   }
//   insertMarkup(res);
// };
