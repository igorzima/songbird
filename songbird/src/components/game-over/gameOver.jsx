import React from 'react';

import './gameOver.css';

export default function GameOver({ count, playAgain }) {
  return (
    <div className="game-over__wrapper">
      <div className="congrats">
        <h1>Вы набрали {count} баллов из 30 возможных</h1>
        <p>
          You are the greatest expert of musical trends! You can try play again, but I think you can
          handle it without problems!
        </p>
        <button onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
}
