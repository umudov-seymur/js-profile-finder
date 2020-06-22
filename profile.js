class Profile {
  async getProfile(username) {
    const profileRequest = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );

    const profile = await profileRequest.json();

    const todoRequest = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`
    );

    const todos = await todoRequest.json();

    return {
      profile,
      todos,
    };
  }
}
