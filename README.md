# COMP 2132 – Final Project

**Fellipe M. Fumagali Scirea**  
BCIT | Web Development with JavaScript

---

## 📝 Project Overview

This repository contains my final project for **COMP 2132 – Web Development with JavaScript**.  
The goal of this assignment is to demonstrate skills in:

- JavaScript (ES6+), DOM manipulation & event handling
- jQuery usage
- CSS → SCSS conversion with partials, mixins, variables, and layers
- Clean project architecture
- Git/GitHub workflows
- Building two interactive browser-based games
- Accessible and responsive design principles

The project includes **two games**, a fully modular SCSS architecture compiled into a single CSS file, and an organized folder structure aligned with best practices.

---

## 🎮 Project Features

### **1. Dice Game**

A simple interactive game where the user rolls dice to generate random results.  
Features include:

- DOM-based display updates
- Random number generation
- Stateful UI feedback
- Modular JavaScript implementation

### **2. Hangman Game**

A browser-based version of the classic word-guessing game.  
Features include:

- Letter input handling
- Dynamic word rendering
- Game state tracking
- Win/loss detection
- Clean separation of UI and logic

---

## 🎨 SCSS Architecture

This project uses a structured SCSS setup compiled into a single `style.css` file.

/css
style.scss ← main entry point
\_variables.scss ← theme maps + CSS variable generation
\_mixins.scss ← shared mixins (WIP or future usage)
\_base.scss ← global resets, typography, skip-links, media rules
\_layout.scss ← header, nav, main, footer layout rules
\_components.scss ← reusable UI components and game UI styling

### Key SCSS Concepts Used

- `@layer` for cascade control (`base`, `layout`, `components`)
- Theme system using:
  - SCSS maps (`$theme-dark`, `$theme-light`)
  - Mixin-driven CSS variable generation
  - Support for future theme toggling
- DRY, modular partials
- No raw CSS in repo — everything compiles from SCSS

---

## 🗂 Folder Structure

FinalProject/
│
├── css/
│ ├── style.scss
│ ├── \_base.scss
│ ├── \_layout.scss
│ ├── \_components.scss
│ ├── \_variables.scss
│ └── \_mixins.scss
│
├── js/
│ ├── jquery-3.7.1.min.js
│ └── main.js ← game logic & event handling
│
├── index.html
└── README.md

---

## 🚀 How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/FMFSc/COMP2132-FinalProject.git

   ```

2. Open index.html in a browser, or use VS Code’s Live Server.

No build steps are required — all compiled CSS is already included.

🔧 Tools & Technologies

- HTML5
- JavaScript (ES6 modules)
- jQuery 3.7
- SCSS + Live Sass Compiler
- Git & GitHub
- VS Code

👨‍💻 Author

    Fellipe M. Fumagali Scirea
    BCIT Student
    Web Dev & Software Engineering Pathway
    Vancouver, BC, Canada

📚 Notes for Instructor

This project demonstrates:

- Clean and maintainable front-end code
- Strong use of SCSS architecture
- Progressive refactoring (CSS → SCSS → layered SCSS)
- Modular JS logic
- Interactive UI elements
- Git proficiency and proper repository structure

If you have any issues running the project, please feel free to contact me.
