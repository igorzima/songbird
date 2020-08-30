import React from 'react';

import AudioPlayer from '../audio-player/audioPlayer';

export default function ItemDetails({ songData, itemId }) {
  function renderItems() {
    const { id, song, artist, description, audio, image } = songData[itemId];

    return (
      <React.Fragment key={id}>
        <div className="image__wrapper">
          <img className="song-image" src={image} alt="item" />
        </div>

        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-hover">
              <h3>{artist}</h3>
            </li>
            <li className="list-group-item list-hover">
              <h4>{song}</h4>
            </li>
            <li className="list-group-item list-hover">
              <AudioPlayer src={audio} />
            </li>
          </ul>
        </div>
        <p className="description">{description}</p>
      </React.Fragment>
    );
  }

  const items =
    itemId || itemId === 0 ? renderItems() : 'Послушайте плеер. Выберите песню из списка';

  return <div className="item-details jumbotron d-flex">{items}</div>;
}
