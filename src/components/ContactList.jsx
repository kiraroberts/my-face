import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

function ContactList(props){
  return(
    <div>
      <hr/>
      {props.masterContactList.map((contact, index) => 
        <Contact name={contact.name}
          image={contact.image}
          key={index}/>
                
      )}
    </div>
  );
}

ContactList.propTypes={
  masterContactList: PropTypes.array
}

export default ContactList;
