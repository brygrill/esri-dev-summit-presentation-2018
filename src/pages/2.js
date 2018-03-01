import React from 'react';
import Link from 'gatsby-link';

import NewTab from '../components/NewTab';

import reactSvg from '../assets/react.svg';
import gulpSvg from '../assets/gulp.svg';
import webpackSvg from '../assets/webpack.svg';
import babelSvg from '../assets/babel.svg';
import wabPng from '../assets/wab.png';

const style = {
  maxWidth: '200px',
  maxHeight: '200px',
  padding: '1rem',
};

const style2 = {
  maxWidth: '150px',
  maxHeight: '200px',
  padding: '1rem',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <div className="flex-group">
      <img src={wabPng} alt="react logo" className="image" style={style2} />
      <img src={reactSvg} alt="react logo" className="image" style={style2} />
      <img src={gulpSvg} alt="gulp logo" className="image" style={style} />
      <img
        src={webpackSvg}
        alt="webpack logo"
        className="image"
        style={style2}
      />
      <img src={babelSvg} alt="babel logo" className="image" style={style} />
    </div>
    <h1>Is it possible?</h1>
    <ul className="list pl0 measure center">
      <li>
        <NewTab
          link="https://developers.arcgis.com/javascript/latest/sample-code/widgets-frameworks-react/index.html"
          content="Can we use React? - Esri React/Widget example"
        />
      </li>
      <li>
        <NewTab
          link="https://github.com/react-bootstrap/react-bootstrap/blob/master/tools/build-dist.js"
          content="Can we write ES6? - React Bootstrap's webpack config"
        />
      </li>
    </ul>
  </div>
);
