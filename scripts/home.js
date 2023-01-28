'use strict'

let dataUser = JSON.parse(localStorage.getItem('dataUserCurentKey'));
let logoutBtn = document.getElementById('btn-logout');
console.log(dataUser); // test
console.log(dataUser == null); // test
if (dataUser == null) {
    // not login

    document.getElementById("main-content").style.display = "none";

} else {
    //loginned
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("welcome-message").innerHTML = "Welcome, " + dataUser.firstName + "!";
}

logoutBtn.addEventListener("click", function() {
    // localStorage: localStorage.removeItem('dataUserCurentKey');
    localStorage.removeItem('dataUserCurentKey');
    window.location.assign("/Assignment 03 (Stater)/pages/login.html")
});