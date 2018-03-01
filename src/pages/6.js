import React from 'react';
import Link from 'gatsby-link';

import webpack from '../assets/webpack.svg';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={webpack} alt="Webpack logo" className="image" style={style} />
    <h1>Webpack</h1>
  </div>
);
