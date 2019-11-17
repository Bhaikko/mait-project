import React from 'react';

import Contact from './Contact/Contact';
import classes from './Contacts.css';

const contacts = props => {
    return (
        <div className={classes.Contacts}>
            {props.contacts.map(contact => <Contact 
                contactName={contact.name} 
                profileImage={contact.profileImage}
                key={contact.id}    
                contactClickHandler={() => {
                    props.contactClickHandler(contact.id)
                }}
            />)}
        </div>
    );
}

export default contacts;