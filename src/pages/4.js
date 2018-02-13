import React from 'react';
import Link from 'gatsby-link';

import widgetDir from '../assets/widget_directory.png';

const style = {
  padding: '1rem',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={widgetDir} alt="widget directory structure" className="image" style={style} />
    <h1>Widget Directory Structure</h1>
  </div>
);
