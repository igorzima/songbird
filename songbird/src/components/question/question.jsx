import React from 'react';

export default function Question({ songData }) {
  const { audio, image } = songData;

  return (
    <div className="jumbotron d-flex">
      <img className="song-image" src={image} alt="song" />
      <div className="flex-grow-1">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>*****</h4>
          </li>
          <li className="list-group-item">
            <audio src={audio} controls />
          </li>
        </ul>
      </div>
    </div>
  );
}
