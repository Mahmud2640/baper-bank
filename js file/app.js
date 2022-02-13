document.getElementById("submit").addEventListener("click", function () {
   // get user email
  const emailField = document.getElementById("email");
  const userEmail = emailField.value;
  //   get user password
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value;

  // condition set
  if (userEmail == "mdmahmud484@gmail.com" && userPassword == "mahmud2640") {
    window.location.href = "banking-site.html";
  } else {
    console.log("type valid email");
  }
});
