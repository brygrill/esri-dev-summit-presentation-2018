import React from 'react';
import Link from 'gatsby-link';

import wab from '../assets/wab.png';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={wab} alt="wab logo" className="image" style={style} />
    <h1>Widget.js</h1>
  </div>
);
