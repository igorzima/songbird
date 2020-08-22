import React from 'react';

export default function Question() {
  return (
    <div className="jumbotron d-flex">
      <img className="song-image" src={'../src.jpg'} alt="song" />
      <div className="flex-grow-1">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>*****</h4>
          </li>
          <li className="list-group-item">
            <audio src="../src.mp3" controls />
          </li>
        </ul>
      </div>
    </div>
  );
}
