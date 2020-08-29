import React from 'react';

import './gameOver.css';

export default function GameOver({ count, playAgain }) {
  return (
    <div className="game-over__wrapper">
      <div className="congrats">
        <h1>Congratulations!!! You score: {count} points</h1>
        <p>
          You are the greatest expert of musical trends! You can try play again, but I think you can
          handle it without problems!
        </p>
        <button onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
}
