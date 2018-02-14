import React from 'react';
import Link from 'gatsby-link';

import npmSvg from '../assets/npm.svg';

const style = {
  maxWidth: '400px',
  maxHeight: '400px',
  padding: '1rem',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={npmSvg} alt="npm logo" className="image" style={style} />
    <h1>npm</h1>
  </div>
);
