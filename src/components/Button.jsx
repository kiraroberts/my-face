import React from 'react';
import PropTypes from 'prop-types';

function Button(prop){
  var removeBorder = {
    border: 'none',
    backgroundColor: 'transparent'
  };
  return(
    <button style={removeBorder}>{prop.buttonName}</button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
};

export default Button;
