import React from 'react';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="left-row col-md-6">{left}</div>
      <div className="right-row col-md-6">{right}</div>
    </div>
  );
};

export default Row;
