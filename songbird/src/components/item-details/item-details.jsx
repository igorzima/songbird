import React from 'react';

export default class ItemDetails extends React.Component {
  state = {
    activeItem: 0,
  };

  renderItems(arr) {
    const { activeItem } = this.state;

    return arr.map((array, idx) => {
      if (activeItem === idx) {
        return array.map(({ song, artist, description }) => {
          return (
            <React.Fragment>
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

      return null;
    });
  }

  render() {
    const items = this.renderItems(this.props.songData);

    return <div className="item-details card">{items}</div>;
  }
}
