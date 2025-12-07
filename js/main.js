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





    $playButton.on("click", function () {
        //call function getFinalValues
        getFinalValues();

        //Selecting the first dice image
        let diceImage = $diceImages[0];

        //updating the dice image
        diceImage.src = getDiceImage(diceNumber);

    });









    // stopRollingAnimation()

    // Stops animation and shows the TRUE final results.
    // Uses finalValues[] to update each die image.
    // Resets game state and buttons.
    // No return value.





    // cancelRolling()

    // Immediately stops all timers.
    // Does NOT show final dice values.
    // Shows the “Thanks for playing” dialog.
    // Resets buttons and state.
    // No return value.





    // PLAY BUTTON EVENT

    // - Ignore click if already rolling
    // - Disable Play, enable Cancel
    // - Set gameIsRolling = true
    // - generateFinalValues()
    // - startRollingAnimation()
    // - Schedule stopRollingAnimation() in 3s





    // CANCEL BUTTON EVENT

    // Calls cancelRolling()



    //Generate a final value (1–6) for each die


    // Start a 3-second rolling animation

    // Animation updates dice faces rapidly

    // After 3 seconds:
    // Stop animation

    // Show final values

    // Enable Cancel / Pause buttons, disable Play during roll



})