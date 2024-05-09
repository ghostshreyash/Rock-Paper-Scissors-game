var choices = ['rock', 'paper', 'scissors'];
var gameOver = false;

$(".btn").click(function () {
    if (!gameOver) {
        var userChoice = $(this).attr("id");
        var computerChoice = choices[Math.floor(Math.random() * choices.length)];

        checkAnswer(userChoice, computerChoice);
    }
})

function checkAnswer(option1, option2) {
    if (option1 === option2) {
        $(".Selection").html("It's a tie!");
    }
    else if (option1 == "rock") {
        if (option2 == 'scissors') {
            $(".Selection").html("Computer choice is scissors.<br> You WON!");
        }
        else {
            $(".Selection").html("Computer draws Paper.<br> You LOSE!");
        }
    }
    else if (option1 == "paper") {
        if (option2 == "rock") {
            $(".Selection").html("Computer choice is Rock.<br> You WON!");
        }
        else {
            $(".Selection").html("Computer draws Scissors.<br> You LOSE!");
        }
    }
    else {
        if (option2 == "paper") {
            $(".Selection").html("Computer choice is Paper.<br> You WON!");
        }
        else {
            $(".Selection").html("Computer draws Rock.<br> You LOSE!");
        }
    }

    setTimeout(function () {
        gameOver = true;
        $("#gameOverScreen").show();
    }, 
    500);
}

$(document).click(function () {
    if (gameOver) {
        restartGame();
    }
});

function restartGame() {
    $(".Selection").html("Select your move");
    gameOver = false;
    $("#gameOverScreen").hide();
}
