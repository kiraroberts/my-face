import React from 'react';
import PropTypes from 'prop-types';

function Button(prop){
    return(
        <button>{prop.buttonName}</button>
    );
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired
};

export default Button;
