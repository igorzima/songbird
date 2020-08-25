import React, { useState } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row';

export default function Level({ songData, songId, getCount }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  const getIsCorrectAnswer = (isCorrect) => {
    setIsCorrectAnswer(isCorrect);
  };

  const itemList = (
    <ItemList
      songData={songData}
      onItemSelected={onItemSelected}
      songId={songId}
      getIsCorrectAnswer={getIsCorrectAnswer}
      correctAnswer={isCorrectAnswer}
      getCount={getCount}
    />
  );

  const itemDetails = <ItemDetails songData={songData} itemId={selectedItem} />;

  return (
    <>
      <Row left={itemList} right={itemDetails} />
      {isCorrectAnswer ? <button className="btn btn-block btn-primary">Next Level</button> : null}
    </>
  );
}
