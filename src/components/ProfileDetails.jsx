import React from 'react';
import PropTypes from 'prop-types';

function ProfileDetails(props){
    return(
        <div>
            <img src={props.image}/>
            <h4>{props.name}</h4>
        </div>
    );
}

ProfileDetails.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default ProfileDetails;