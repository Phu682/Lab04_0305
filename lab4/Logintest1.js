document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const alertMessage = document.getElementById("alert-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "kittamate" && password === "2163") {
            alertMessage.textContent = "your username and password are correct! you are logged in";
        } else {
            alertMessage.textContent = "your username or password is incorrect! please try again.";
        }
    });
});