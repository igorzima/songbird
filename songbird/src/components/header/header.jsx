import React, { useState } from 'react';

import './header.css';

export default function Header({ category, activeItem }) {
  const [score, setScore] = useState(0);

  function renderItems(arr) {
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

  const items = renderItems(category);

  return (
    <header className="header">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Songbird</h1>
        <span>Score: {score}</span>
      </div>
      <div>
        <ul className="list-group list-group-horizontal">{items}</ul>
      </div>
    </header>
  );
}
