import React from 'react';

export default class ItemList extends React.Component {
  state = {
    activeItem: 0,
  };

  renderItems(arr) {
    const { activeItem } = this.state;

    return arr.map((array, idx) => {
      if (activeItem === idx) {
        return array.map(({ artist }) => {
          return (
            <li className="list-group-item" key={artist}>
              {artist}
            </li>
          );
        });
      }

      return null;
    });
  }

  render() {
    const items = this.renderItems(this.props.songData);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
