import React, { useState } from 'react';

import songsData from '../../data/data';

import Header from '../header';
import Question from '../question';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

export default function App() {
  const [category, songData] = songsData;

  const [activeItem] = useState(2);

  const activeSongData = songData[activeItem];

  console.log(activeSongData);

  return (
    <>
      <Header category={category} activeItem={activeItem} />
      <Question />
      <ItemList songData={activeSongData} />
      <ItemDetails songData={activeSongData} />
    </>
  );
}
