import React from 'react';

import './question.css';

export default function Question({ songData }) {
  const { audio, image } = songData;

  return (
    <div className="jumbotron d-flex">
      <img className="song-image" src={image} alt="song" />
      <div className="card-body">
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
