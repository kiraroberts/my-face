import React from 'react';
import ProfileDetails from './ProfileDetails';
import BackgroundImg from './BackgroundImg';
import PropTypes from 'prop-types';

function Profile(profData){
  var aStyles = {
    margin: '5px'
  };
  var aDivStyle = {
    clear: 'left'
  };
  var profDetailsStyle = {

  };

  return (
    <div>
      <div>
        <BackgroundImg source={profData.bgImg} />
        <ProfileDetails name={profData.name} image={profData.profImage} style={profDetailsStyle}/>
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
