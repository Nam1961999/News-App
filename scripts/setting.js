'use strict'

let newsPerPage = document.getElementById('input-page-size');
let newsCategory = document.getElementById('input-category');
let btnSubmit = document.getElementById('btn-submit');

let dataUser = JSON.parse(localStorage.getItem('dataUserCurentKey'));
console.log(dataUser);

btnSubmit.addEventListener('click', () => {
    dataUser.newsCategory = newsCategory.value;
    dataUser.newsPerPage = newsPerPage.value;
    newsPerPage.value = "";
    newsCategory.value = "";
    console.log(dataUser);
    localStorage.setItem('dataUserCurentKey', JSON.stringify(dataUser));

})