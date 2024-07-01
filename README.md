## Number Guessing Game (Learning Exercise)

This is a simple JavaScript game built as an exercise to showcase my understanding of fundamental concepts like functions, DOM manipulation, and event listeners. You try to guess a randomly generated number between 1 and 20 within 20 attempts.

### Features

- Guess a random number between 1 and 20.
- Get feedback on your guesses (too high, too low, correct).
- Track your score and high score.
- Play again button to restart the game.

### How to Play

1. Open the HTML file containing this script.
2. Enter your guess in the input field.
3. Click the "Check" button.
4. The game will tell you if your guess was too high, too low, or correct.
5. Your score will decrease with each incorrect guess.
6. If you guess the correct number, your high score will be updated if you beat your previous best.
7. Click the "Play Again" button to restart the game with a new random number.

### Code Structure

This script utilizes several functions to achieve the game mechanics:

- `selectElement`: Takes a CSS selector and returns the corresponding DOM element.
- `modifyTextContent`: Updates the text content of a selected element.
- These functions interact with the HTML elements to display messages, update the score and high score, and change the background color based on game state.
- Event listeners are attached to the "Check" and "Play Again" buttons to handle user interaction and update the game accordingly.

### Dependencies

This script relies on basic HTML and DOM manipulation techniques. No external libraries are required.

### Enjoy the Game!

Test your guessing skills and see if you can reach the high score!
