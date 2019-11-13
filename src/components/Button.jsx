import React from 'react';
import PropTypes from 'prop-types';

function Button(prop){

  return(
    <button className='btn btn-info' >{prop.buttonName}</button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
};

export default Button;
