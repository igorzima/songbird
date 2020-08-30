import React from 'react';

// import AudioPlayer from '../audio-player/audioPlayer';

import './question.css';

import Image from '../../speaker.svg';

export default function Question({ songData, isCorrectAnswer, isNextLevel }) {
  const { artist, song, audio, image } = songData;

  return (
    <div className="jumbotron d-flex question-wrapper">
      <div className="image__wrapper">
        {isCorrectAnswer ? (
          <img className="song-image" src={image} alt="song" />
        ) : (
          <img className="song-ico" src={Image} alt="song" />
        )}
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-hover">
            <h2>{isCorrectAnswer ? `${artist} - ${song}` : '*****'}</h2>
          </li>
          <li className="list-group-item list-hover">
            {/* <AudioPlayer src={audio} isNextLevel={isNextLevel} /> */}
            <audio className="player" src={audio} controls></audio>
          </li>
        </ul>
      </div>
    </div>
  );
}
