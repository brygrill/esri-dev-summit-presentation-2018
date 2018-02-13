import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

import reactSvg from '../assets/react.svg';
import gulpSvg from '../assets/gulp.svg';
import webpackSvg from '../assets/webpack.svg';
import babelSvg from '../assets/babel.svg';
import npmSvg from '../assets/npm.svg';
import jestSvg from '../assets/jest.svg';

const style = {
  maxWidth: '200px',
  maxHeight: '300px',
  padding: '1rem',
};

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src={reactSvg} alt="react logo" className="image" style={style} />
    <img src={gulpSvg} alt="gulp logo" className="image" style={style} />
    <img src={webpackSvg} alt="webpack logo" className="image" style={style} />
    <img src={babelSvg} alt="babel logo" className="image" style={style} />
    <img src={npmSvg} alt="npm logo" className="image" style={style} />
    <img src={jestSvg} alt="jest logo" className="image" style={style} />
    <h1>Built with OSS</h1>
  </div>
);
