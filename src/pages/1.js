import React from 'react';
import Link from 'gatsby-link';

import eba from '../assets/eba.png';

const style = {
  maxWidth: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={eba} alt="EBA logo" className="image" style={style} />
    <h1>WAB & React</h1>
    <p>Develop a Web AppBuilder Widget with React and Webpack</p>
  </div>
);
