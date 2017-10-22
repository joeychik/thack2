var mysql = require ("mysql");

function toRegister () {

  var name = document.getElementById ("InputName").value;
  var email = document.getElementById ("InputEmail").value;
  var login = document.getElementById ("InputLogin").value;
  car password = document.getElementById ("InputEmail").value;

  var registerCon = new registerController ();

  registerCon.saveUser (
    name,
    email,
    login,
    password,
    function (result) {
      if (result === true) {
        alert ("Successful registration!");
        location.href = "./index.html";
      } else {
        alert ("Error! Registration could not be completed.")
    });

}
