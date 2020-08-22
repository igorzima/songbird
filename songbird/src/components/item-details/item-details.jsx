import React from 'react';

export default function ItemDetails({ songData }) {
  function renderItems(arr) {
    return arr.map(({ id, song, artist, description }) => {
      return (
        <React.Fragment key={id}>
          <img className="item-image" src="../src.img" alt="item" />

          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{song}</h4>
              </li>
              <li className="list-group-item">{artist}</li>
              <li className="list-group-item">
                <audio src="../src.mp3" controls />
              </li>
            </ul>
            <p>{description}</p>
          </div>
        </React.Fragment>
      );
    });
  }

  const items = renderItems(songData);

  return <div className="item-details card">{items}</div>;
}
