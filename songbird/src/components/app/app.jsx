import React, { useState } from 'react';

import songsData from '../../data/data';

import Header from '../header';
import Question from '../question';
import Level from '../level';

export default function App() {
  function getRandomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
  }

  const songId = getRandomInteger(0, 5);

  const [category, songData] = songsData;

  const [activeHeaderItem] = useState(0);

  const activeSongData = songData[activeHeaderItem];

  return (
    <>
      <Header category={category} activeItem={activeHeaderItem} />
      <Question songData={activeSongData[songId]} />
      <Level songData={activeSongData} songId={songId} />
    </>
  );
}
