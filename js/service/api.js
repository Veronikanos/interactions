import {CustomError} from '../errors.js';

class JSONPlaceholderAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.allGuests = [];
  }

  async get(path) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`);

      if (!response.ok) {
        throw new Error(`Error with status: ${response.status}`);
      }

      const res = await response.json();
      return res;
    } catch (error) {
      console.error(error);
      throw new CustomError();
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
        throw new Error(`Error with status: ${response.status}`);
      }
      const res = await response.json();
      return res;
    } catch (error) {
      console.error(error);
      throw new CustomError();
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
      console.error(error);
      throw new CustomError();
    }
  }

  async addUser(body = null) {
    try {
      const user = await this.post('/users', body);
      this.addGuest(user);
      return user;
    } catch (error) {
      console.error(error);
      throw new CustomError();
    }
  }

  async getUserPosts(userId) {
    try {
      const posts = await this.get(`/users/${userId}/posts`);
      return posts;
    } catch (error) {
      console.error(error);
      throw new CustomError();
    }
  }
}
