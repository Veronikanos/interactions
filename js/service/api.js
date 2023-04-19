const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2d95e97f255e7635245c1980eab541d3';

export const fetchTrendingMovies = async () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      // console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
