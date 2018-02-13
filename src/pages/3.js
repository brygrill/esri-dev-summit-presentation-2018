import React from 'react';
import Link from 'gatsby-link';

import wabDir from '../assets/wab_directory.png';

const style = {
  padding: '1rem',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={wabDir} alt="wab directory structure" className="image" style={style} />
    <h1>WAB Directory Structure</h1>
  </div>
);
