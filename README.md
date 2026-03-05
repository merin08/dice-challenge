# 🎲 Dice Challenge

A fun two-player dice rolling game built with HTML, CSS, and JavaScript. Refresh the page to roll the dice and find out who wins!

---

## 🕹️ How It Works

Every time the page loads or refreshes:
- Both **Player 1** and **Player 2** are assigned a **random dice roll** (1–6)
- The dice images update to reflect each player's roll
- The result is announced at the top:
  - 🚩 **Player 1 Wins** — if Player 1 rolls higher
  - 🚩 **Player 2 Wins** — if Player 2 rolls higher
  - 🤝 **Draw** — if both roll the same number

---

## 🚀 Live Demo

[Click here to play]((https://merin08.github.io/dice-challenge/))

> *(Replace the link above with your actual GitHub Pages URL)*

---

## 🛠️ Built With

- **HTML** — Page structure
- **CSS** — Styling and layout
- **JavaScript** — Random dice logic and DOM manipulation

---

## 📁 Project Structure

```
dice-challenge/
│
├── index.html        # Main HTML file
├── styles.css        # Styling
├── index.js          # Game logic
└── images/
    ├── dice1.png
    ├── dice2.png
    ├── dice3.png
    ├── dice4.png
    ├── dice5.png
    └── dice6.png
```

---

## 💡 Key JavaScript Concepts Used

- `Math.random()` and `Math.floor()` for random number generation
- `document.querySelectorAll()` for selecting DOM elements
- Dynamic `src` attribute update for images
- Conditional logic (`if / else if / else`) for determining the winner

---

## 👤 Author

**Your Name**  
[GitHub Profile](https://github.com/merin08)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
