import React from 'react';
import Link from 'gatsby-link';

import jest from '../assets/jest.svg';
import npm from '../assets/npm.svg';

const style = {
  maxWidth: '300px',
  maxHeight: '300px',
  padding: '1rem',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <div className="flex-group">
      <img src={npm} alt="npm logo" className="image" style={style} />
      <img src={jest} alt="jest logo" className="image" style={style} />
    </div>
    <h1>Extras</h1>
  </div>
);
