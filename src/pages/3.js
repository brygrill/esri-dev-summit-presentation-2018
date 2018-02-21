import React from 'react';
import Link from 'gatsby-link';

import gulp from '../assets/gulp.svg';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={gulp} alt="Gulp Logo" className="image" style={style} />
    <h1>Build Pipeline</h1>
    {/* <ul className="list flex-list">
      <li className="f4 fw7 dib pa2 black">WAB app</li>
      <li className="f4 fw7 dib pa2 black">Widget as React Component (<code>App.js</code>)</li>
      <li className="f4 fw7 dib pa2 black"><code>Widget.js</code> entry</li>
    </ul> */}
  </div>
);
