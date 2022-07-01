getUserRepos("rdoolz51");

function getUserRepos(user) {
  var apiURL = "https://api.github.com/users/" + user + "/repos";

  //make request to URL
  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
}
