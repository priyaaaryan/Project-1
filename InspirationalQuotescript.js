
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

