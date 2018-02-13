import React from 'react';
import Link from 'gatsby-link';

import reactSvg from '../assets/react.svg';

const style = {
  maxWidth: '200px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={reactSvg} alt="react logo" className="image" style={style} />
    <h1>WAB & React</h1>
    <p>Develop a Web AppBuilder Widget with React and Webpack</p>
  </div>
);
