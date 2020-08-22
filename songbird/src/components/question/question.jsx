import React from 'react';

export default class Question extends React.Component {
  render() {
    return (
      <div className="jumbotron d-flex">
        <img className="planet-image" src={'../src.jpg'} alt="planet" />
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
}
