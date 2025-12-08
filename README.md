# **COMP 2132 – Dice Game**

### **Final Project – Fellipe M. Fumagali Scirea**

A browser-based interactive dice game built for **BCIT's COMP 2132 – Web Development with JavaScript** course.  
This project demonstrates practical use of **JavaScript, jQuery, DOM manipulation, timed animations, UI state management, and responsive layout** techniques.

---

## ⭐ Project Summary

This Dice Game is a three-round match between the **Player** and the **Computer**.  
Each round simulates rolling two dice per side, calculates scores based on course-defined rules, updates the UI dynamically, and presents the game outcome at the end.

The project emphasizes:

- Clean event-driven JavaScript
- Modularized game logic
- DOM-driven UI updates
- Animation via timed intervals
- State tracking for rounds and scores
- Reset and replay functionality
- Structured layout and styling with SCSS

---

## 🎮 Gameplay Overview

### **Rolling Phase**

- Clicking **Play** starts a 3-second dice animation.
- The dice faces change rapidly to simulate motion.
- After the animation ends, final values replace the temporary ones.

### **Scoring Rules**

| Dice Outcome          | Score             |
| --------------------- | ----------------- |
| Either die is **1**   | **0**             |
| A matching pair       | **(d1 + d2) × 2** |
| Any other combination | **d1 + d2**       |

### **Game Flow**

- Scoreboard updates after each round.
- Running totals accumulate automatically.
- After 3 rounds, a summary modal displays:
  - **Player win**
  - **Computer win**
  - **Tie**

### **Controls**

- **Play**: Starts rolling.
- **Cancel**:
  - If rolling → cancels the animation
  - If mid-game → resets the game
- **Reset Game**: Resets game in any round.
- **Play Again**: Appears after round 3 to restart cleanly.

---

## 🧩 Key Features

- 🎞️ **Animated Dice Rolling** using `setInterval`
- 🔢 **Deterministic Scoring Logic**
- 🔄 **Full Game State Management**
- ⚙️ **Dynamic UI Rendering** using jQuery
- 🎨 **Responsive Layout** styled with SCSS
- 🖼️ **Custom 2D Dice Assets**

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS / SCSS**
- **JavaScript (ES6)**
- **jQuery 3.7.1**
- **Google Fonts**
- **Custom PNG assets**

---

## 📁 Project Structure

COMP2132-FinalProject/
│── css/
│ └── style.css
│── images/
│ ├── dice-face-01.png
│ ├── dice-face-02.png
│ ├── dice-face-03.png
│ ├── dice-face-04.png
│ ├── dice-face-05.png
│ └── dice-face-06.png
│── js/
│ ├── jquery-3.7.1.min.js
│ └── main.js
│── index.html
│── README.md

---

## 🚀 Running the Project

No build tools required.  
Simply clone and open **index.html** in any modern browser:

<!-- bash -->

git clone https://github.com/FMFSc/COMP2132-FinalProject

👨‍💻 Author

    Fellipe M. Fumagali Scirea
    BCIT Student
    Web Dev & Software Engineering Pathway
    Vancouver, BC, Canada

If you have any issues running the project, please feel free to contact me.
