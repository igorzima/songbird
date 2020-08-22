import React from 'react';

import './header.css';

export default class Header extends React.Component {
  state = {
    activeItem: 0,
  };

  renderItems(arr) {
    const { activeItem } = this.state;

    return arr.map((item, idx) => {
      if (activeItem === idx) {
        return (
          <li className="list-group-item flex-grow-1 active" key={item}>
            {item}
          </li>
        );
      }

      return (
        <li className="list-group-item flex-grow-1" key={item}>
          {item}
        </li>
      );
    });
  }

  render() {
    const items = this.renderItems(this.props.category);

    return (
      <header className="header">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Songbird</h1>
          <span>Score</span>
        </div>
        <div>
          <ul className="list-group list-group-horizontal">{items}</ul>
        </div>
      </header>
    );
  }
}
