<<<<<<< HEAD
//Declaring the needed variables
var content = document.querySelector("#quote");
var auth = document.querySelector("#auth");
var InspQtebtn = document.querySelector("#btn");
 
//Adding event listener
btn.addEventListener("click", getInsQuote);
 
//Declaring function to get inspirational quote
function getInsQuote() {
    fetch("https://api.quotable.io/random")
    .then(function(res){
        res.json().then(function(data){
            content.innerHTML = data.content;
            auth.innerHTML= data.author;
        })
    })
}
=======
var quote = document.querySelector('#quote');
var author = document.querySelector('#author');
var InspQtebtn = document.querySelector('#btn');

btn.addEventListener("click", getInsQuote);

function getInsQuote() {
    fetch("http://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.content;
        author.innerHTML= data.author;
    })
}
>>>>>>> 2e10363698399d8526071f5741af772e836f5a58
