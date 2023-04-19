// import './api.js';

import {fetchTrendingMovies} from './service/api.js';

fetchTrendingMovies().then((res) => console.log(res.results));
// console.log(fetchTrendingMovies());
