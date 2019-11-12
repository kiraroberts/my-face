import React from 'react';
import ProfileDetails from './ProfileDetails';
import About from './About';
import PropTypes from 'prop-types';

function Message(props){
  return(
    <div>
      <ProfileDetails name={props.name} image={props.img} />
      <About content={props.content}/>
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Message;