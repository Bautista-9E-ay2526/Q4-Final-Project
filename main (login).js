//Login details
const correctUser = "#####";
const correctPass = "#####";

//Login button
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login");

    loginBtn.addEventListener("click", () => {
        const user = document.getElementById("user").value.trim();
        const pass = document.getElementById("pass").value.trim();

        if (user === correctUser && pass === correctPass) {
            alert("Access granted!\nWelcome " + user + "!");
        }
        else {
            alert("Access denied!\nIncorrect username and/or password.");
        }
    });
});