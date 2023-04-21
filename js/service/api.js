import {CustomError} from '../errors.js';

class JSONPlaceholderAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.allGuests = [];
  }

  async get(path) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`);
      console.log(response);

      if (!response.ok) {
        throw new CustomError(
          'Problems with sending a request. There is wrong URL or network connection issues.'
        );
      }
      const res = await response.json();
      return res;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      if (error instanceof SyntaxError) {
        throw new CustomError('Syntax Error');
      } else {
        throw new CustomError('Failed to get data');
      }
    }
  }

  async post(path, data) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: data}),
      });
      if (!response.ok) {
        throw new CustomError(
          `Error with status: ${response.status}`,
          response.status
        );
      }
      const res = await response.json();
      return res;
    } catch (error) {
      ////////////////////////
      // if (error instanceof CustomError) {
      //   console.error(`Custom error: ${error.message} with code: ${error.code}`);
      // } else {
      //   console.error('Unexpected error:', error);
      // }
      throw new CustomError('Failed to post data', error.code);
    }
  }
}

export class Guests extends JSONPlaceholderAPI {
  constructor() {
    super('https://jsonplaceholder.typicode.com');
    this.allGuests = [];
  }

  get guestsList() {
    return this.allGuests;
  }

  addGuest(newGuest) {
    const user = {
      name: newGuest.name,
      id: newGuest.id,
    };
    this.allGuests.push(user);
  }

  async getUsers() {
    try {
      const result = await this.get('/users');
      result.forEach((user) => this.addGuest(user));
      return this.guestsList;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        new CustomError('Enable to get all users list');
      }
    }
  }

  async addUser(body = null) {
    try {
      const user = await this.post('/users', body);
      this.addGuest(user);
      return user;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        new CustomError('Enable to add new user');
      }
    }
  }

  async getUserPosts(userId) {
    try {
      const posts = await this.get(`/users/${userId}/posts`);
      return posts;
    } catch (error) {
      console.error(error);
      // throw new CustomError();
    }
  }
}
