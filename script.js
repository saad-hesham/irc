let ratingButton = document.querySelectorAll(".parent-rating-container span"); //call spans
let rating = 0 ; //rating

//this loop will add function on spans the function will add class active class on clicked span will remove from the rest 
for(let i = 0 ; i<=ratingButton.length-1 ; i++){
    ratingButton[i].onclick = function(){ 
        for(let i = 0 ; i<= ratingButton.length-1 ; i++){
            ratingButton[i].classList.remove("active-span");
            

        }
        ratingButton[i].classList.add("active-span")
        rating = ratingButton[i].innerHTML;

    }
}
let submitButton = document.querySelector("#submit"); //submit button

submitButton.onclick = function(){
    document.querySelector(".rating-number").innerHTML = rating
    document.querySelector(".rating-card").style.display="none"
    document.querySelector(".thanks-card").style.display="block";
}

