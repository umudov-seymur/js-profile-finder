class UI {
  constructor() {
    this.container = document.querySelector("#profileContainer");
  }
  showProfile(profile) {
    this.container.innerHTML = `
      <div class="card card-body mt-5">
        <div class="row">
          <div class="col-md-4">
            <h4>Contact</h4>
            <hr>
            <ul class="list-group shadow-sm">
              <li class="list-group-item">
                <strong>Name</strong> : ${profile.name}
              </li>
              <li class="list-group-item">
                <strong>Username</strong> : ${profile.username}
              </li>
              <li class="list-group-item">
                <strong>Email</strong> : ${profile.email}
              </li>

              <li class="list-group-item">
                <strong>Address</strong> : ${profile.address.street}
              </li>
              <li class="list-group-item">
                <strong>Phone</strong> : ${profile.phone}
              </li>
              <li class="list-group-item">
                <strong>Website</strong> : ${profile.website}
              </li>
              <li class="list-group-item">
                <strong>Company</strong> : ${profile.company.name}
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <h4>Todo list</h4>
            <hr>
            <ul id="todo" class="list-group shadow-sm"></ul>
          </div>
        </div>
      </div>
  `;
  }
  showLoading() {
    this.container.innerHTML = `
      <div class="text-center mt-4" id="loading">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    `;
  }
  hideLoading() {
    this.container.querySelector("#loading").remove();
  }
  showTodos(todos) {
    let todoHtml = this.container.querySelector("#todo");
    todos.forEach((todo) => {
      const isComplete = todo.completed ? "success" : "secondary";
      todoHtml.innerHTML += `
        <li class="list-group-item bg-${isComplete}">
          ${todo.title}
        </li>
      `;
    });
  }
  showError(username) {
    this.container.innerHTML = `
      <div class="alert alert-danger mt-4 shadow-sm">
        <strong>${username}</strong> not found :(
      </div
    `;
  }
}
