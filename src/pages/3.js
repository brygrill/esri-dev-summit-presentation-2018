import React from 'react';
import Link from 'gatsby-link';

import widgetDir from '../assets/widget_directory.png';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={widgetDir} alt="wab directory" className="image" style={style} />
    <h1>Core Elements</h1>
    <ul className="list flex-list">
      <li className="f4 fw7 dib pa2 black">WAB app</li>
      <li className="f4 fw7 dib pa2 black">Widget as React Component (<code>App.js</code>)</li>
      <li className="f4 fw7 dib pa2 black"><code>Widget.js</code> entry</li>
    </ul>
  </div>
);
