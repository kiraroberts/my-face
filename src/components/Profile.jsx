import React from 'react';
import ProfileDetails from './ProfileDetails';
import BackgroundImg from './BackgroundImg';
import PropTypes from 'prop-types';

function Profile(profData){
  var aStyles = {
    marginRight: '8px'
  };
  var aDivStyle = {
    clear: 'left',
    marginTop: '70px'
  };
  var bgImgStyle = {
    position: 'absolute',
    bottom: '-75px',
  };

  var parentStyle = {
    position: 'relative'
  };


  return (
    <div>
      <div style={parentStyle}>
        <BackgroundImg source={profData.bgImg} />
        <div style={bgImgStyle}> 
          <ProfileDetails name={profData.name} image={profData.profImage}/>
        </div>
      </div>
      <div style={aDivStyle}>
        <a href='' style={aStyles}>Chirps</a>
        <a href='' style={aStyles}>Following</a>
        <a href='' style={aStyles}>Leading</a>
      </div>
    </div>
  );
}

Profile.proptypes = {
  bgImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profImage: PropTypes.string.isRequired
};

export default Profile;
