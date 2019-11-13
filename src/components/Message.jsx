import React from 'react';
import ProfileDetails from './ProfileDetails';
import About from './About';
import PropTypes from 'prop-types';

function Message(props){
  var floatProfile = {
    float: 'left',
    marginRight: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingRight: '10px'
  }
  var topPadding = {
    paddingTop: '50px',
    paddingLeft: '120px'
  }
  return(
    <div>
      <div style={floatProfile}>
        <ProfileDetails name={props.name} image={props.img} />
      </div>
      <div style={topPadding}>
      <About content={props.content}/>
      </div>
      <hr/>
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Message;