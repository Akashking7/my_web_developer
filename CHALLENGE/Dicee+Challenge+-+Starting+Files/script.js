//==== image 1 dice player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random 1-6

var randomdiceImage = "dice" + randomNumber1 + ".png"; // dice1.png dice6.png

var randomImagesource = "images/" + randomdiceImage; //images/dice1-6.png

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImagesource);

//=========== image 2 dice player 2 ( same only but we are going to it short code)

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random 1-6

var randomImagesource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);


//if player 1 wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 player 1 wins 🏆"
}
// if player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆 player 2 wins 🏆"
}
// if its draw
else {
    document.querySelector("h1").innerHTML = " its Draw 🤝"
}