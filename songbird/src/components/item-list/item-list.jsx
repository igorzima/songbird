import React, { useState } from 'react';

import './item-list.css';

export default function ItemList({
  songData,
  onItemSelected,
  songId,
  getIsCorrectAnswer,
  correctAnswer,
  getCount,
}) {
  const [count, setCount] = useState(5);
  let isCorrect = correctAnswer;

  const itemHandler = (event, id) => {
    const audio = document.querySelector('.audio');

    if (id === songId) {
      event.target.children[0].classList.add('correct');

      audio.pause();

      isCorrect = true;
    } else {
      if (!isCorrect) {
        event.target.children[0].classList.add('wrong');

        if (count !== 0) {
          setCount((prev) => prev - 1);
        }
      }
    }
  };

  function renderItems(arr) {
    return arr.map(({ artist, id }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={(event) => {
            onItemSelected(id);
            itemHandler(event, id);
            getIsCorrectAnswer(isCorrect);
            getCount(isCorrect && count);
          }}>
          <span className="li-btn"></span>
          {artist}
        </li>
      );
    });
  }

  const items = renderItems(songData);

  return (
    <div>
      <ul className="item-list list-group">{items}</ul>
    </div>
  );
}
