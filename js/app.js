document.getElementById("submit").addEventListener("click", function () {
   // get user email
  const emailField = document.getElementById("email");
  const userEmail = emailField.value;
  //   get user password
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value;

  // condition set
  if (userEmail == "mybank@gmail.com" && userPassword == "1234") {
    window.location.href = "banking-site.html";
  } else {
    alert("Please input your email and password!!!");
  }
});
