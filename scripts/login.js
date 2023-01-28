'use strict'


let dataUser = JSON.parse(localStorage.getItem('dataUserKey')) || [];
console.log(dataUser);

const userNameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const loginButton = document.getElementById("btn-submit");


//Event click Button Login
loginButton.addEventListener("click", function() {
    // console.log(dataUser[0].userName); //test
    // console.log(userNameInput.value); //test
    for (let i = 0; i < dataUser.length; i++) {
        console.log(dataUser[i].passWord);
        if (dataUser[i].userName === userNameInput.value && dataUser[i].passWord === passwordInput.value) {
            console.log("login successful")
            let currentUser = {
                firstName: dataUser[i].firstName,
                lastName: dataUser[i].lastName,
                userName: dataUser[i].userName,
                passWord: dataUser[i].passWord,
                newsPerPage: "6",
                newsCategory: "Technology",
            };
            localStorage.setItem('dataUserCurentKey', JSON.stringify(currentUser));
            window.location.assign("/Assignment 03 (Stater)/index.html")
        } else alert("Login failed")
    };
});