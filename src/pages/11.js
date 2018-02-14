import React from 'react';
import Link from 'gatsby-link';

import jestSvg from '../assets/jest.svg';

const style = {
  maxWidth: '400px',
  maxHeight: '400px',
  padding: '1rem',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={jestSvg} alt="jest logo" className="image" style={style} />
    <h1>Testing with Jest</h1>
  </div>
);
