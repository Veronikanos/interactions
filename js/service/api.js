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
      } else {
        throw new CustomError(
          'Failed to get data, request in unsuccessful'
        );
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
          'Problems with sending a request. There is wrong URL or network connection issues.'
        );
      }
      const res = await response.json();
      return res;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(
          'Failed to add data, request in unsuccessful'
        );
      }
    }
  }
}

export class Customers extends JSONPlaceholderAPI {
  constructor() {
    super('https://jsonplaceholder.typicode.com');
    this.allCustomers = [];
  }

  get customersList() {
    return this.allCustomers;
  }

  addCustomerToList(newGuest) {
    const user = {
      name: newGuest.name,
      id: newGuest.id,
    };
    this.allCustomers.push(user);
  }

  async getCustomers() {
    try {
      const result = await this.get('/users');
      result.forEach((user) => this.addCustomerToList(user));
      return this.customersList;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        new CustomError('Failed to get list of users');
      }
    }
  }

  async addUser(body = null) {
    try {
      const user = await this.post('/users', body);
      this.addCustomerToList(user);
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
      if (error instanceof CustomError) {
        throw error;
      } else {
        new CustomError('Failed to get users posts');
      }
    }
  }
}
