import React from 'react';
import PropTypes from 'prop-type';

function Image(prop){
    return(
        <img src={prop.source}/>
    );
}

Image.propTypes = {
    source: PropTypes.string.isRequired
};

export default Image;