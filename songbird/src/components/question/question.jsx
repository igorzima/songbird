import React from 'react';

import './question.css';

import Image from '../../speaker.svg';

export default function Question({ songData, isCorrectAnswer }) {
  const { artist, song, audio, image } = songData;

  return (
    <div className="jumbotron d-flex">
      <div className="image-wrapper">
        {isCorrectAnswer ? (
          <img className="song-image" src={image} alt="song" />
        ) : (
          <img className="song-ico" src={Image} alt="song" />
        )}
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-hover">
            <h4>{isCorrectAnswer ? `${artist} - ${song}` : '*****'}</h4>
          </li>
          <li className="list-group-item list-hover">
            <audio className="audio" src={audio} controls />
          </li>
        </ul>
      </div>
    </div>
  );
}
