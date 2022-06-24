let requestURL = 'https://raw.githubusercontent.com/kwan0042/WDIP2021/main/hp.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const harryPotter = request.response;
    showHP(harryPotter);
}


function showHP(obj) {
const books = obj['books'];
const bookName = document.querySelectorAll(".book");
const bookPublished = document.querySelectorAll(".published");
const bookPrice = document.querySelectorAll("#productsPrice");

for (let i = 0; i < books.length; i++) {

    bookName[i].innerText = books[i].book;
    bookPublished[i].innerText = books[i].published;
    bookPrice[i].innerText = books[i].price;
}
}




