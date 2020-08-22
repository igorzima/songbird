import React from 'react';

import songsData from '../../data/data';

import Header from '../header';
import Question from '../question';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

export default function App() {
  const [category, songData] = songsData;

  return (
    <div>
      <Header category={category} />
      <Question />
      <ItemList songData={songData} />
      <ItemDetails songData={songData} />
    </div>
  );
}
