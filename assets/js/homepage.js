var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a get request to url
  fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

// variable declarations for the form
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

// form handler for  form.
var formSubmitHandler = function(event){
  event.preventDefault();
  var username = nameInputEl.value.trim();

  if(username){
    getUserRepos(username);
    nameInputEl.value = "";
  }else{
    alert("Please enter a GitHub Username");
  }
};

// submit event listener for userformEl.
userFormEl.addEventListener("submit", formSubmitHandler);