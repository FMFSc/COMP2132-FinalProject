/**
 * @ Author: Fellipe M Fumagali Scirea
 * @ BCIT Student # : A01181350
 * @ Created: 11-27-2025
 * @ Description: COMP 2132 Final Project - Deliverable as part of coursework.
 */

const root = document.documentElement;

// document
//     .getElementById("theme-toggle")
//     .addEventListener("click", () => {
//         root.classList.toggle("theme-light");
//     });

$(function () {


    //Function to generate the path to images in their directory
    function getDiceImage(diceNumber) {
        const padded = diceNumber.toString().padStart(2, "0");
        return `./images/dice-face-${padded}.png`;
    }

    // GLOBAL VARIABLES
    //DOM Access
    const $playButton = $('[data-action="play"]');
    const $cancelButton = $('[data-action="cancel"]');
    const $diceImages = $(".dice-face img");

    // finalValues: stores the actual final results (1–6) for each die
    const diceFinalValues = [];
    // rollingInterval: controls the fast rolling animation
    let rollingInterval = null;
    // rollingTimeout: stops animation after 3 seconds
    let rollingTimeout = null;
    // gameIsRolling: prevents clicking Play multiple times
    let gameIsRolling = false;
    //Length of time the dice will display each face during animation
    const rollingAnimationInterval = 100; //milliseconds
    //Total time the rolling animation will last
    const rollingAnimationDuration = 3000; //milliseconds
    //Player & Computer Round Scores
    const playerScores = [];
    const computerScores = [];
    //Round index tracker
    let roundIndex = 0;
    //Player and Computer total score
    let totalPlayerScore = 0;
    let totalComputerScore = 0;

    const $diceDialog = $(".game-dialog-dice");
    const $diceDialogMessage = $("[data-dice-dialog-message]");
    const $diceDialogClose = $("[data-action='close-dice-dialog']");



    // getFinalValues()
    // Creates the final dice results BEFORE animation.
    // Fills finalValues[] with numbers 1–6. No return value.
    function getFinalValues() {
        diceFinalValues.length = 0;
        for (let i = 0; i < $diceImages.length; i++) {
            let diceNumber = Math.floor(Math.random() * 6) + 1;
            diceFinalValues.push(diceNumber);
        }
    }

    // startRollingAnimation()

    // Starts the fast animation loop.
    // Every ~100ms each die shows a temporary random face.
    // Does NOT use the final roll values.
    // No return value.

    function startRollingAnimation() {
        //If animation is already running, exit function        
        if (rollingInterval !== null) {
            return;
        }

        rollingInterval = setInterval(function () {
            // For each dice image, show a temporary random face
            $diceImages.each(function () {
                const tempValue = Math.floor(Math.random() * 6) + 1;
                this.src = getDiceImage(tempValue);
            });
        }, rollingAnimationInterval);
    }

    //Function to register dice scores into a data storage
    function registerRoundPoints() {
        const playerDie1 = diceFinalValues[0];
        const playerDie2 = diceFinalValues[1];
        const computerDie1 = diceFinalValues[2];
        const computerDie2 = diceFinalValues[3];

        const playerRoundScore = roundScore(playerDie1, playerDie2);
        const computerRoundScore = roundScore(computerDie1, computerDie2);

        playerScores.push(playerRoundScore);
        computerScores.push(computerRoundScore);
        roundIndex++;
    }

    // roundScore()
    // Helper function to calculate current round score based on game rules:
    // If any die is 1, then score 0
    // If the dice are a pair, then calculate (d1 + d2) * 2
    // Otherwise, regular sum
    function roundScore(d1, d2) {
        if (d1 === 1 || d2 === 1) {
            return 0;
        } else if (d1 === d2) {
            return ((d1 + d2) * 2);
        } else {
            return (d1 + d2);
        }
    }

    //runningTotal
    //Function to calculate running total before final round
    function runningTotal() {
        let playerRunningTotal = 0;
        let computerRunningTotal = 0;

        for (let i = 0; i < 3; i++) {
            playerRunningTotal += playerScores[i];
            computerRunningTotal += computerScores[i];
        }
        $(`data-score = "player-running-total"`).text(playerRunningTotal);
        $(`data-score = "computer-running-total"`).text(ComputerRunningTotal);

    }

    // Updating UI with scores
    function updateScoreboardUI() {
        for (let i = 0; i < 3; i++) {
            const playerScore = playerScores[i];
            const computerScore = computerScores[i];

            if (playerScore != null) {
                $(`[data-score="player-game-${i+1}"]`).text(playerScore);
            }

            if (computerScore != null) {
                $(`[data-score="computer-game-${i+1}"]`).text(computerScore);
            }
        }
        runningTotal();



    }

    //gameWinner()
    //game evaluation function to determine winner
    function gameWinner() {
        totalPlayerScore = 0;
        totalComputerScore = 0;

        for (let i = 0; i < playerScores.length; i++) {
            totalPlayerScore += playerScores[i];
            totalComputerScore += computerScores[i];
        }
    }

    //showFinalWinnerDialog function
    //display final dialog after game is complete
    //Presents the winner of the game, if there is one
    function showFinalWinnerDialog() {
        gameWinner();

        if (totalPlayerScore > totalComputerScore) {
            $diceDialogMessage.text(`Player wins! Total: ${totalPlayerScore} vs ${totalComputerScore}`);
        } else if (totalPlayerScore < totalComputerScore) {
            $diceDialogMessage.text(`Computer wins! Total: ${totalPlayerScore} vs ${totalComputerScore}`);
        } else {
            $diceDialogMessage.text(`This game was a draw! Total: ${totalPlayerScore} vs ${totalComputerScore}`);
        }

        $diceDialog.removeAttr("hidden");
    }

    //Function to reset the game and allow player to play again
    function resetGame() {
        totalPlayerScore = 0;
        totalComputerScore = 0;

        roundIndex = 0;

        diceFinalValues.length = 0;
        playerScores.length = 0;
        computerScores.length = 0;

    }


    // stopRollingAnimation()
    // Stops animation and shows the TRUE final results.
    // Uses finalValues[] to update each die image.
    // Resets game state and buttons.
    function stopRollingAnimation() {
        //Clear the rolling interval to stop animation
        clearInterval(rollingInterval);
        rollingInterval = null;

        //Update each dice image to show the final values
        $diceImages.each(function (index) {
            const finalValue = diceFinalValues[index];
            this.src = getDiceImage(finalValue);
        });

        //Reset game state and buttons
        $playButton.prop("disabled", false);
        $cancelButton.prop("disabled", true);

        registerRoundPoints();
        updateScoreboardUI();

        if (roundIndex === 3) {
            showFinalWinnerDialog();
            $playButton.prop("disabled", true);
        } else {
            gameIsRolling = false;
            $playButton.prop("disabled", false);

            //After completing at least one round
            $cancelButton.prop("disabled", false);
            $cancelButton.text("Reset Game");
        }
    }


    // cancelRolling function:
    // Immediately stops all timers.
    // Does NOT show final dice values.
    // Shows the “Thanks for playing” dialog.
    // Resets buttons and state.
    function cancelRolling() {
        //Game is rolling, user wants to cancel
        if (gameIsRolling) {
            //Clear all timers
            clearInterval(rollingInterval);
            clearTimeout(rollingTimeout);
            rollingInterval = null;
            rollingTimeout = null;
            gameIsRolling = false;

            //Reset buttons and state
            $playButton.prop("disabled", false);
            $cancelButton.prop("disabled", true);

            //Show "Thanks for playing" dialog
            $diceDialogMessage.text("Thanks for playing!");
            $diceDialog.removeAttr("hidden");
            return;
        }

        //In case the user wants to reset the game
        if (!gameIsRolling && roundIndex > 0 && roundIndex < 3) {
            resetGame();
            updateScoreboardUI();
            $cancelButton.prop("disabled", true);
            $cancelButton.text("Cancel");
            $playButton.text("Play");

            $diceDialogMessage.text("Thanks for playing!");
            $diceDialog.removeAttr("hidden");

        }




        gameIsRolling = false;

    }

    $diceDialogClose.on("click", function () {
        $diceDialog.attr("hidden", true);

        //If game is finished, enable new game
        if (roundIndex === 3) {
            $playButton.text("Play Again");
            $playButton.prop("disabled", false);
            $cancelButton.prop("disabled", true);
        }
    });

    // CANCEL BUTTON EVENT
    // Calls cancelRolling()
    $cancelButton.on("click", function () {
        cancelRolling();
    });



    $playButton.on("click", function () {
        // Resetting the game if it is finished
        if (roundIndex === 3 && !gameIsRolling) {
            //reset game and clear UI
            resetGame();

            //reset the button text
            $playButton.text("Play");


        }


        //If already rolling, disable play button
        if (gameIsRolling) {
            return;
        }

        gameIsRolling = true;
        //Disable Play button, enable Cancel button, Change Cancel button text back
        $playButton.prop("disabled", true);

        $cancelButton.prop("disabled", false);
        $cancelButton.text("Cancel");

        //call function getFinalValues
        getFinalValues();
        //Start rolling animation  
        startRollingAnimation();


        rollingTimeout = setTimeout(function () {
            stopRollingAnimation();
            rollingTimeout = null;
        }, rollingAnimationDuration);
    });

})