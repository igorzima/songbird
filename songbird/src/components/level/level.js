import React, { useState } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row';

export default function Level({
  songData,
  songId,
  getCount,
  startNextLevel,
  getIsCorrectAnswer,
  isCorrectAnswer,
  isNextLevel,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  const itemList = (
    <ItemList
      songData={songData}
      onItemSelected={onItemSelected}
      songId={songId}
      getIsCorrectAnswer={getIsCorrectAnswer}
      correctAnswer={isCorrectAnswer}
      getCount={getCount}
      isNextLevel={isNextLevel}
    />
  );

  const itemDetails = <ItemDetails songData={songData} itemId={selectedItem} />;

  return (
    <>
      <Row left={itemList} right={itemDetails} />
      {isCorrectAnswer ? (
        <button
          className="btn btn-block btn-primary"
          onClick={() => {
            startNextLevel();
            setSelectedItem(null);
          }}>
          Next Level
        </button>
      ) : null}
    </>
  );
}
