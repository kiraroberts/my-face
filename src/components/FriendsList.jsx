import React from 'react';
import ProfileDetails from './ProfileDetails';
import PropTypes from 'prop-types';

function FriendsList(props) {
  return (
    <div>
      <hr />
      {props.friendsList.map((contact, index) =>
        <ProfileDetails name={contact.name}
          image={contact.image}
          key={index} />

      )}
    </div>
  );
}

FriendsList.propTypes = {
  friendsList: PropTypes.array
}

export default FriendsList;
