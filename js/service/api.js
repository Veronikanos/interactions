export class MovieApi {
  #apiKey;
  constructor(apiKey = '2d95e97f255e7635245c1980eab541d3') {
    this.#apiKey = apiKey;
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.guestSessionId = null;
  }

  async fetchGuestSessionId() {
    const endpoint = 'authentication/guest_session/new';
    const response = await this.fetchMoviesData(endpoint);
    // console.log(response);
    this.guestSessionId = response.guest_session_id;
    // console.log(this.guestSessionId);
  }

  async fetchMoviesData(endpoint, params) {
    return fetch(
      `${this.BASE_URL}/${endpoint}?api_key=${this.#apiKey}${
        params ? '&' + new URLSearchParams(params) : ''
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        console.log(response);
        return response.json();
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  // get details about some movie with its ID
  async getMovieDetailsByID(movieId) {
    const endpoint = `movie/${movieId}`;
    return await this.fetchMoviesData(endpoint);
  }

  async rateMovie(movieId, rating) {
    // const endpoint = `movie/${movieId}/rating`;
    // console.log('kj');

    // if (!this.guestSessionId) {
    //   throw new Error('Guest session not initialized');
    // }

    // const params = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     guest_session_id: this.guestSessionId,
    //     value: rating,
    //   }),
    // };
    // return await this.fetchMoviesData(endpoint, params);
    fetch(
      'https://api.themoviedb.org/3/movie/640145/rating?api_key=2d95e97f255e7635245c1980eab541d3',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          guest_session_id: 'cc3fc0476aef6dbed4d50f0b5c79a250',
          value: 9,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
}

export class MovieByTitle extends MovieApi {
  constructor() {
    super();
    this.title = '';
  }

  async searchMovieByTitle(title) {
    const endpoint = '/search/movie';
    const params = {
      language: 'en-US',
      page: 1,
      include_adult: false,
      query: title,
    };
    return await this.fetchMoviesData(endpoint, params);
  }
}

export class TrendingMovies extends MovieApi {
  constructor() {
    super();
  }

  // get all trending movies during current day
  async getTrendingMovies() {
    const endpoint = 'trending/movie/day';
    return await this.fetchMoviesData(endpoint);
  }

  // async getTrendingMovieDetails(movieId) {
  //   const movie = await this.getMovieDetails(movieId);
  //   const credits = await this.getMovieCredits(movieId);
  //   return {...movie, credits};
  // }

  // async getMovieCredits(movieId) {
  //   const endpoint = `movie/${movieId}/credits`;
  //   return await this.fetchMoviesData(endpoint);
  // }
}
