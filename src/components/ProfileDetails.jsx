import React from 'react';
import PropTypes from 'prop-types';

function ProfileDetails(props){
  var imageStyles = {
    width: '100px',
    height: 'auto',
    margin: '10px',
    float: 'left'
  };

  var divStyles = {
    display: 'inline-block',
    marginTop: '50px'
  };

  return(
    <div>
      <img src={props.image} style={imageStyles}/>
      <h4 style={divStyles}>{props.name}</h4>
    </div>
  );
}

ProfileDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default ProfileDetails;