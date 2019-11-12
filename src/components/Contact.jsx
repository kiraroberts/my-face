import React from 'react';
import ProfileDetails from './ProfileDetails';
import Button from './Button';

var button = {
  buttonName: 'Add Me'
};
function Contact(details){
  var clearFloat = {
    clear: 'left'
  };
  return(
    <div>
      <ProfileDetails name={details.name}
        image={details.image}/>
      <div style={clearFloat}>
        <Button buttonName = {button.buttonName} />
      </div>
      <hr/>
    </div>
  );
}



export default Contact;

