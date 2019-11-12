import React from 'react';
import PropTypes from 'prop-types';

function About(prop){
  return(
    <p>{prop.content}</p>
  );
}

About.propTypes = {
  content: PropTypes.string
};

export default About;