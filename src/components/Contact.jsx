import React from 'react';
import ProfileDetails from './ProfileDetails';
import Button from './Button';

var button = {
  buttonName: 'Add Me'
};
function Contact(details){
  return(
    <div>
      <ProfileDetails name={details.name}
        image={details.image}/>
      <Button buttonName = {button.buttonName}/>
    </div>
  );
}



export default Contact;

