/**
 * @ Author: Fellipe M Fumagali Scirea
 * @ BCIT Student # : A01181350
 * @ Created: 11-27-2025
 * @ Description: COMP 2132 Final Project - Deliverable as part of coursework.
 */

const root = document.documentElement;

document
.getElementById("theme-toggle")
.addEventListener("click", () => {
    root.classList.toggle("theme-light");
});

