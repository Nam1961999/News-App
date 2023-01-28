'use strict'
const firstName = document.getElementById("input-firstname");
const lastName = document.getElementById("input-lastname");
const userName = document.getElementById("input-username");
const passWord = document.getElementById("input-password");
const confirmpassWord = document.getElementById("input-password-confirm");
const submitBtn = document.getElementById("btn-submit");



const KEY = "USER_ARRAY";
const userArr = [];




//nhấn nút Submit
submitBtn.addEventListener("click", function() {
    const dataUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        passWord: passWord.value,
        confirmpassWord: confirmpassWord.value,
        newsPerPage: "6",
        newsCategory: "Technology",
    };


    console.log(dataUser); //test
    const validate = validateData(dataUser);
    console.log(validate);
    // console.log(validate);//test
    if (validate) {
        let user = new User(dataUser.firstName, dataUser.lastName, dataUser.userName, dataUser.passWord);
        userArr.push(user);

        user.validate();
        // clearInput();
        // renderTableData(userArr);
        console.log(userArr);
        localStorage.setItem('dataUserKey', JSON.stringify(userArr));
        alert("Registered Successfully!")
    }
});

//Gọi hàm validate để kiểm tra form hợp lệ   
function validateData(dataUser) {
    // Check empty data
    if (firstName.value === "") {
        alert("Empty First Name");
        return false;
    }
    if (lastName.value === "") {
        alert("Empty lastName");
        return false;
    }
    if (userName.value === "") {
        alert("Empty userName");
        return false;
    }
    if (passWord.value === "") {
        alert("Please enter a password validate");
        return false;
    }
    if (passWord.value === confirmpassWord.value) {
        return true;
    }
    if (passWord.value != confirmpassWord.value) {
        alert("Please confirm password");
        return false;
    } else
        return false;
}