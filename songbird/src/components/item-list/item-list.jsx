import React from 'react';

export default function ItemList({ songData }) {
  function renderItems(arr) {
    return arr.map(({ artist, id }) => {
      return (
        <li className="list-group-item" key={id}>
          {artist}
        </li>
      );
    });
  }

  const items = renderItems(songData);

  return <ul className="item-list list-group">{items}</ul>;
}
