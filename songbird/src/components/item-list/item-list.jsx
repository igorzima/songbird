import React, { useState } from 'react';

import './item-list.css';

export default function ItemList({ songData, onItemSelected, songId }) {
  const [count, setCount] = useState(5);
  const [isCorrect, setIsCorrect] = useState(false);

  const itemHandler = (event, id) => {
    if (id === songId) {
      event.target.children[0].classList.add('correct');

      setIsCorrect(true);
    } else {
      if (!isCorrect) {
        event.target.children[0].classList.add('wrong');
        setCount((prev) => prev - 1);
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
