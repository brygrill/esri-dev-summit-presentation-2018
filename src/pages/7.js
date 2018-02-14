import React from 'react';
import Link from 'gatsby-link';

import gulpSvg from '../assets/gulp.svg';

const style = {
  maxWidth: '200px',
  maxHeight: '400px',
  padding: '1rem',
};


export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={gulpSvg} alt="gulp logo" className="image" style={style} />
    <h1>Gulp Build Pipeline</h1>
  </div>
);
