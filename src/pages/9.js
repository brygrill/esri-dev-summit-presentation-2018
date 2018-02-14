import React from 'react';
import Link from 'gatsby-link';

import widgetDir from '../assets/widget_directory.png';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={widgetDir} alt="wab directory" className="image" style={style} />
    <h1>Widget.js</h1>
  </div>
);
