import React from 'react';

import './gameOver.css';

export default function GameOver({ count, playAgain }) {
  const win = (
    <div className="game-over__wrapper">
      <div className="congrats">
        <h1 className="congrats-title">Вы набрали {count} баллов из 30 возможных</h1>
        <h3 className="congrats-description">Поздравляю вы настоящий знаток музыки!</h3>
      </div>
    </div>
  );

  const loose = (
    <div className="game-over__wrapper">
      <div className="congrats">
        <h1 className="congrats-title">Вы набрали {count} баллов из 30 возможных</h1>
        <h3 className="congrats-description">Попробуйте сыграть еще раз!</h3>
        <button className="btn btn-primary" onClick={playAgain}>
          Play again
        </button>
      </div>
    </div>
  );

  return <>{count === 30 ? win : loose}</>;
}
