import React from 'react';
import Link from 'gatsby-link';

import reactSvg from '../assets/react.svg';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={reactSvg} alt="React logo" className="image" style={style} />
    <h1>Using React in WAB</h1>
  </div>
);
