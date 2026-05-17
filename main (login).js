//Login details
const correctUser = "Group6";
const correctPass = "143MSPASCO";

//Login button
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login");

    loginBtn.addEventListener("click", () => {
        const user = document.getElementById("user").value.trim();
        const pass = document.getElementById("pass").value.trim();

        if (user === correctUser && pass === correctPass) {
            alert("Access granted!\nWelcome " + user + "!");
            window.location.href = "dashboard.html";
        }
        else {
            alert("Access denied!\nIncorrect username and/or password.");
        }
    });
});
