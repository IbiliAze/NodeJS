import { createStore } from 'redux';


var data = JSON.stringify({"siteName":"London"});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "localhost:5000/api/site/");
xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmUyMjE5NWMyYjE2MzI3NmMxYzEzMjUiLCJpYXQiOjE2MDg2NTUyNTN9._mb_Dnq6o_U2mNCsUJyFsY5IikBAxeJ8oQYs2QzemDg");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);