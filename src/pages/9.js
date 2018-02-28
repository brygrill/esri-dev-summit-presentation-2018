import React from 'react';
import Link from 'gatsby-link';

import NewTab from '../components/NewTab';

import eba from '../assets/eba.png';

const style = {
  maxWidth: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={eba} alt="EBA logo" className="image" style={style} />
    <h1>Links</h1>
    <ul className="list pl0 measure center">
      <li>
        <NewTab
          link="https://github.com/brygrill/wab-react-webpack"
          content="WAB React Webpack Template Repo"
        />
      </li>
      <li>
        <NewTab
          link="https://github.com/brygrill/esri-dev-summit-presentation-2018"
          content="Presentation Repo"
        />
      </li>
      <li>
        <NewTab
          link="http://www.ebaengineering.com/"
          content="EBA Engineering"
        />
      </li>
    </ul>
  </div>
);
