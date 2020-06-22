const ui = new UI();
const profile = new Profile();

const searchProfile = document.getElementById("searchProfile");

const capitalize = (s) => {
  s = s.toLowerCase();
  return s[0].toUpperCase() + s.slice(1);
};

searchProfile.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    ui.showLoading();
    const username = capitalize(searchProfile.value).trim();
    profile
      .getProfile(username)
      .then((data) => {
        const { profile, todos } = data;
        ui.hideLoading();
        ui.showProfile(profile[0]);
        ui.showTodos(todos);
      })
      .catch((err) => ui.showError(username));
  }
});
