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


    // stopRollingAnimation()

    // Stops animation and shows the TRUE final results.
    // Uses finalValues[] to update each die image.
    // Resets game state and buttons.
    // No return value.
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
        gameIsRolling = false;
        $playButton.prop("disabled", false);
        $cancelButton.prop("disabled", true);
    }


    // cancelRolling()

    // Immediately stops all timers.
    // Does NOT show final dice values.
    // Shows the “Thanks for playing” dialog.
    // Resets buttons and state.
    function cancelRolling() {
        //do nothing if game is not rolling
        if (!gameIsRolling) {
            return;
        }

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

        gameIsRolling = false;

    }

    $diceDialogClose.on("click", function () {
        $diceDialog.attr("hidden", true);
    });

    // CANCEL BUTTON EVENT
    // Calls cancelRolling()
    $cancelButton.on("click", function () {
        cancelRolling();
    });


    $playButton.on("click", function () {
        //If already rolling, disable play button
        if (gameIsRolling) {
            return;
        }

        gameIsRolling = true;

        //Start rolling animation  
        startRollingAnimation();
        //Disable Play button, enable Cancel button
        $playButton.prop("disabled", true);
        $cancelButton.prop("disabled", false);

        rollingTimeout = setTimeout(function () {
            stopRollingAnimation();
            rollingTimeout = null;
        }, rollingAnimationDuration);

        //call function getFinalValues
        getFinalValues();
    });


    //Generate a final value (1–6) for each die


    // Start a 3-second rolling animation

    // Animation updates dice faces rapidly

    // After 3 seconds:
    // Stop animation

    // Show final values

    // Enable Cancel / Pause buttons, disable Play during roll



})