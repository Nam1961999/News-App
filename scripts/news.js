'use strict'
let newsContainer = document.getElementById("news-container");
let nextButton = document.getElementById("btn-next");
let prevButton = document.getElementById("btn-prev");
let pageNumber = document.getElementById("page-num");
let linkPrev = document.getElementById("link-prev");
let linkNext = document.getElementById("link-next");
let pageSize = 5;
let page = 1;
let numPage = 1;

let dataUser = JSON.parse(localStorage.getItem('dataUserCurentKey'));
console.log(dataUser);

async function getNews() {
    let apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=${dataUser.newsCategory}&apiKey=55ec824033084ce6ad6c8a707d078edc&page=${page}&pageSize=${dataUser.newsPerPage}`
    let data = await fetch(apiURL).then(res => res.json())


    console.log(data);
    // console.log(data.articles[1].urlToImage);
    numPage = Math.ceil(data.totalResults / pageSize);

    newsContainer.innerHTML = "";
    for (let i = 0; i < data.articles.length; i++) {
        newsContainer.innerHTML += '<div class="card flex-row flex-wrap">' +
            '<div class="card mb-3" style="">' +
            '<div class="row no-gutters">' +
            '<div class="col-md-4">' +
            '<img src="' + `${data.articles[i].urlToImage}` + '" class="card-img" alt="Image was not found" />' +
            '</div>' +
            '<div class="col-md-8">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + `${data.articles[i].title}` + '</h5>' +
            '<p class="card-text">' + `${data.articles[i].content ? data.articles[i].content : 'No Discription.'}` + '</p>' +
            '<a href="' + `${data.articles[i].url}` + '" class="btn btn-primary">View</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'


        // console.log(newsContainer.innerHTML);
    }
    pageNumber.innerHTML = page;

    if (page <= 1) {
        linkPrev.classList.add("disabled");
    } else {
        linkPrev.classList.remove("disabled");
    }

    if (page == numPage) {
        linkNext.classList.add("disabled");
    } else {
        linkNext.classList.remove("disabled");
    }
}
getNews()


nextButton.addEventListener('click', function() {
    if (page < numPage) {
        page += 1;
        getNews();
    }

});

prevButton.addEventListener('click', function() {
    if (page > 1) {
        page -= 1;
        getNews();
    }

});