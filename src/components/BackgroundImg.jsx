import React from 'react';
import PropTypes from 'prop-types';

function Image(prop){
  var imageStyles = {
    width: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  };
  return(
    <img src={prop.source} style={imageStyles}/>
  );
}

Image.propTypes = {
  source: PropTypes.string.isRequired
};

export default Image;