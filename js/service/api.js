export class MovieApi {
  #apiKey;
  constructor(apiKey = '2d95e97f255e7635245c1980eab541d3') {
    this.#apiKey = apiKey;
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.sessionId = '';
    // this.endpoint =
  }

  get apiKey() {
    return this.#apiKey;
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
        // console.log(response);
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

export class UserData extends MovieApi {
  constructor() {
    super();
    this.guestSessionId = null;
  }

  async fetchGuestSessionId() {
    const endpoint = 'authentication/guest_session/new';
    const {guest_session_id} = await this.fetchMoviesData(endpoint);
    this.guestSessionId = guest_session_id;
    console.log(this.guestSessionId);
  }
}
