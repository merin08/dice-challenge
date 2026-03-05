var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var leftDiceImage = document.querySelectorAll("img")[0];
leftDiceImage.src = "./images/dice" + randomNumber1 + ".png";

var rightDiceImage = document.querySelectorAll("img")[1];
rightDiceImage.src = "./images/dice" + randomNumber2 + ".png";


if(randomNumber1 > randomNumber2) {
  document.querySelector("h1.title").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1.title").innerHTML = "🤝 Draw!!"
}
else {
  document.querySelector("h1.title").innerHTML = "🚩Player 2 Wins!";
}
