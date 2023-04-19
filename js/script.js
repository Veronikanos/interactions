import {MovieApi} from './service/api.js';
import {TrendingMovies} from './service/api.js';

const trendingMovies = new TrendingMovies();

trendingMovies.getTrendingMovies().then((res) => console.log(res));
// console.log(fetchTrendingMovies());
