import React from 'react';
import ContactList from './ContactList';
import PropTypes from 'prop-types';

function ContactWrap(props){
  return(
    <div>
      <h3>Contacts</h3>
      <ContactList masterContactList={props.contactList}/>
    </div>
  );
}

ContactWrap.propTypes = {
  contactList: PropTypes.array
}

export default ContactWrap;