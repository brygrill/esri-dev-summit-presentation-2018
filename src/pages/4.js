import React from 'react';
import Link from 'gatsby-link';
import Code from '../components/Code';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>This slide is rendering itself</h2>
    <p>
      Using <code>babel-plugin-include</code>!
    </p>
    <Code>{include('4.js')}</Code>
  </div>
);
