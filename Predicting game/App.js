
import React, { useState } from 'react';

function Game() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const userGuess = parseInt(guess);
    if (userGuess === randomNumber) {
      setMessage('Congratulations! You guessed the correct number!');
    } else if (userGuess < randomNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
    setGuess('');
  };

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <form onSubmit={handleGuessSubmit}>
        <label>
          Enter your guess (between 1 and 100):
          <input
            type="number"
            value={guess}
            onChange={handleGuessChange}
            min="1"
            max="100"
            required
          />
        </label>
        <button type="submit">Submit Guess</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Game;