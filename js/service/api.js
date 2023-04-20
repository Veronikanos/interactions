class JSONPlaceholderAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.allGuests = [];
  }

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);

    // console.log(response);
    if (!response.ok) {
      throw new Error(`Error with status: ${response.status}`);
    }

    const res = await response.json();
    // console.log(res);
    return res;
  }

  async post(path, data) {
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
    console.log(newGuest);
    const user = {
      name: newGuest.name,
      id: newGuest.id,
    };
    this.allGuests.push(user);
  }

  // removeGuest(id) {
  //   this.allGuests = this.allGuests.filter(
  //     (guest) => guest.id !== id
  //   );
  // }

  async getUsers() {
    const result = await this.get('/users');
    result.forEach((user) => this.addGuest(user));
    console.log(this.guestsList);
    return this.guestsList;
  }

  // async getPosts() {
  //   return await this.get('/posts');
  // }
  // async getComments() {
  //   return await this.get('/comments');
  // }

  async addUser(body = null) {
    console.log(body);
    const user = await this.post('/users', body);
    console.log(user);
    this.addGuest(user);
    return user;
  }

  async getUserPosts(userId) {
    const posts = await this.get(`/users/${userId}/posts`);
    return posts;
  }
}
