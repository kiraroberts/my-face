import React from 'react';
import ProfileDetails from './ProfileDetails';
import BackgroundImg from './BackgroundImg';
import PropTypes from 'prop-types';

function Profile(profData){
  return (
    <div>
      <BackgroundImg source={profData.bgImg} />
      <ProfileDetails name={profData.name} image={profData.profImage} />
      <div>
        <a href=''>Chirps</a>
        <a href=''>Following</a>
        <a href=''>Leading</a>
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
