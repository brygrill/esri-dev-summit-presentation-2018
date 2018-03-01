import React from 'react';
import Link from 'gatsby-link';

import NewTab from '../components/NewTab';

import jsSvg from '../assets/javascript.svg';

const style = {
  maxHeight: '350px',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={jsSvg} alt="JS logo" className="image" style={style} />
    <h1>Javascript Modules</h1>
    <ul className="list pl0 measure center">
      <li>
        <NewTab
          link="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc"
          content="JS Modules: A Beginners Guide"
        />
      </li>
    </ul>
  </div>
);
