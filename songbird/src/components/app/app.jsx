import React, { useState } from 'react';

import songsData from '../../data/data';

import Header from '../header';
import Question from '../question';
import Level from '../level';
import GameOver from '../game-over';

function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

export default function App() {
  const [category, songData] = songsData;

  const [songId, setSongId] = useState(getRandomInteger(0, 5));
  const [activeHeaderItem, setActiveHeaderItem] = useState(0);
  const [count, setCount] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [isNextLevel, setIsNextLevel] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const activeSongData = songData[activeHeaderItem];

  const getIsCorrectAnswer = (isCorrect) => {
    setIsCorrectAnswer(isCorrect);

    if (isCorrect) {
      setIsNextLevel(true);
    }
  };

  const getCount = (count) => {
    if (count) {
      setCount((prev) => prev + count);
    }
  };

  const startNextLevel = () => {
    setActiveHeaderItem((prev) => prev + 1);
    setIsCorrectAnswer(null);
    setSongId(getRandomInteger(0, 5));
    setIsNextLevel(false);

    document.querySelectorAll('.li-btn').forEach((el) => el.classList.remove('correct', 'wrong'));

    if (activeHeaderItem === category.length - 1) {
      setGameOver(true);
    }
  };

  const playAgain = () => {
    setSongId(getRandomInteger(0, 5));
    setActiveHeaderItem(0);
    setCount(0);
    setIsCorrectAnswer(null);
    setIsNextLevel(false);
    setGameOver(false);
  };

  return (
    <>
      {gameOver ? (
        <GameOver count={count} playAgain={playAgain} />
      ) : (
        <>
          <Header category={category} activeItem={activeHeaderItem} count={count} />
          <Question
            songData={activeSongData[songId]}
            isCorrectAnswer={isCorrectAnswer}
            isNextLevel={activeHeaderItem}
          />
          <Level
            songData={activeSongData}
            songId={songId}
            getCount={getCount}
            startNextLevel={startNextLevel}
            isCorrectAnswer={isCorrectAnswer}
            getIsCorrectAnswer={getIsCorrectAnswer}
            isNextLevel={isNextLevel}
          />
        </>
      )}
    </>
  );
}
