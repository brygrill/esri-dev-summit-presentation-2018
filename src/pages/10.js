import React from 'react';
import Link from 'gatsby-link';

import agolAuth from '../assets/agol_auth.png';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={agolAuth} alt="agol auth login" className="image" style={style} />
    <h1>Secured Services</h1>
  </div>
);
