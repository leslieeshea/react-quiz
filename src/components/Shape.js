import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  return (
      <>
        <p style={{ color }}>{text}</p>
        <div style={{ backgroundColor, width: '100px', height: '100px' }}></div>
      </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
