import React, { useState } from 'react';

import songsData from '../../data/data';

import Header from '../header';
import Question from '../question';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

export default function App() {
  const [category, songData] = songsData;

  const [activeItem, setActiveItem] = useState(0);

  const activeSongData = songData[activeItem];

  const changeItem = () => {
    if (activeItem === category.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem((prev) => (prev += 1));
    }
  };

  return (
    <>
      <Header category={category} activeItem={activeItem} />
      <Question songData={activeSongData[0]} />
      <div className="d-flex">
        <ItemList songData={activeSongData} />
        <ItemDetails songData={activeSongData[0]} />
      </div>
      <button className="btn btn-warning" onClick={changeItem}>
        Change active item
      </button>
    </>
  );
}
