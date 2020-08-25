import React, { useState } from 'react';

import songsData from '../../data/data';

import Header from '../header';
import Question from '../question';
import Level from '../level';

function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

export default function App() {
  const [category, songData] = songsData;

  const [songId] = useState(getRandomInteger(0, 5));
  const [activeHeaderItem] = useState(0);
  const [count, setCount] = useState(0);

  const activeSongData = songData[activeHeaderItem];

  const getCount = (count) => {
    if (count) {
      setCount(count);
    }
  };

  return (
    <>
      <Header category={category} activeItem={activeHeaderItem} count={count} />
      <Question songData={activeSongData[songId]} />
      <Level songData={activeSongData} songId={songId} getCount={getCount} />
    </>
  );
}
