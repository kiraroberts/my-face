import React from 'react';
import PropTypes from 'prop-types';

function About(prop){
  return(
    <div>
      <p>{prop.content}</p>
    </div>
  );
}

About.propTypes = {
  content: PropTypes.string
};

export default About;