import React from 'react';
import Contact from './Contact';

var masterContactList = [
    {
        name: 'Andy',
        image: 'https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg'
    },
    {
        name: 'Dorothy',
        image: 'https://c8.alamy.com/comp/EAKDHA/portrait-of-a-little-girl-with-hat-posing-as-a-gangster-EAKDHA.jpg'
    },
    {
        name: 'Gertrude',
        image: 'https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg'
    }
];

function ContactList(){
    return(
        <div>
            <hr/>
            {masterContactList.map((contact, index) => 
                <Contact name={contact.name}
                image={contact.image}
                key={index}/>
                
                )}
        </div>
    );
}

export default ContactList;
