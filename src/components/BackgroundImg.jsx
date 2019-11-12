import React from 'react';
import PropTypes from 'prop-types';

function Image(prop){
  var imageStyles = {
    width: '500px',
    height: 'auto'
  };
  return(
    <img src={prop.source} style={imageStyles}/>
  );
}

Image.propTypes = {
  source: PropTypes.string.isRequired
};

export default Image;