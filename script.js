var count = 1;

document.querySelector(".dice").style.display = "none";

function dice_roll() {

    var randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    diceAction(randomNumber);

}

document.querySelector(".btn--roll").addEventListener('click', dice_roll);

function diceAction(randomNumber) {

    document.querySelector(".dice").style.display = "block";
    document.querySelector("img").src = "dice-" + randomNumber + ".png";


    if (count % 2 != 0) {

        if (randomNumber > 1) {


            Number(document.querySelector("#score--0").textContent) >= 50 ? isWinner(document.querySelectorAll("section")[0]) : Player1_action(randomNumber);

        }
        else {

            document.querySelector("#current--0").textContent = 0;
            document.querySelector('.player--1').classList.add("player--active");
            document.querySelector('.player--0').classList.remove("player--active");
            count = count + 1;

        }

    }
    else {

        if (randomNumber > 1) {


            Number(document.querySelector("#score--1").textContent) >= 50 ? isWinner(document.querySelectorAll("section")[1]) : Player2_action(randomNumber);

        }
        else {

            document.querySelector("#current--1").textContent = 0;
            document.querySelector('.player--0').classList.add("player--active");
            document.querySelector('.player--1').classList.remove("player--active");
            count = count + 1;
        }
    }
}
function dice_hold() {
    if (count % 2 != 0) {



        document.querySelector('.player--1').classList.add("player--active");
        document.querySelector('.player--0').classList.remove("player--active");
        var prevscore = Number(document.querySelector("#score--0").textContent);
        var score = Number(document.querySelector("#current--0").textContent);
        document.querySelector("#score--0").textContent = prevscore + score;
        document.querySelector("#current--0").textContent = 0;

    }
    else {


        document.querySelector('.player--0').classList.add("player--active");
        document.querySelector('.player--1').classList.remove("player--active");
        var prevscore = Number(document.querySelector("#score--1").textContent);
        var score = Number(document.querySelector("#current--1").textContent);
        document.querySelector("#score--1").textContent = prevscore + score;
        document.querySelector("#current--1").textContent = 0;
    }
    count = count + 1

}
document.querySelector(".btn--hold").addEventListener('click', dice_hold);


document.querySelector(".btn--new").addEventListener('click', function () {
    var arr = ["#current--1", "#current--0", "#score--1", "#score--0"];

    for (var i = 0; i < arr.length; i++) {
        document.querySelector(arr[i]).textContent = 0;
    }
    var sections = document.querySelectorAll("section");


    sections[0].classList.add("player--active");
    sections[1].classList.remove("player--active");

    for (var i = 0; i < sections.length; i++) {

        if (sections[i].classList.contains("player--winner")) {

            sections[i].classList.remove("player--winner");

        }
    }
    count = 1;

});


function isWinner(ActivePlayer) {



    ActivePlayer.classList.add("player--winner");
    if (ActivePlayer.classList.contains("player--0")) {
        document.querySelectorAll("section")[1].classList.remove("player--active");
        document.querySelector('.btn--hold').removeEventListener('click', dice_hold);
        document.querySelector('.btn--roll').removeEventListener('click', dice_roll);
    }
    else if (ActivePlayer.classList.contains("player--1")) {
        document.querySelectorAll("section")[0].classList.remove("player--active");
        document.querySelector('.btn--hold').removeEventListener('click', dice_hold);
        document.querySelector('.btn--roll').removeEventListener('click', dice_roll);
    }

}

function Player1_action(randomNumber) {


    var prev_Value = Number(document.querySelector("#current--0").textContent);

    document.querySelector("#current--0").textContent = prev_Value + randomNumber;
}

function Player2_action(randomNumber) {
    var prev_Value = Number(document.querySelector("#current--1").textContent);

    document.querySelector("#current--1").textContent = prev_Value + randomNumber;
}