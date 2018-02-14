import React from 'react';
import PropTypes from 'prop-types';

const NewTab = props => {
  return (
    <a
      href={props.link}
      className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
      target="_blank"
    >
      {props.content}
    </a>
  );
};

NewTab.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NewTab;
