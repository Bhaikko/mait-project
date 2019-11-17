import React, { useRef } from 'react';

import Contact from './Contact/Contact';
import classes from './Contacts.css';

const Contacts = props => {

    const dropdownHandler = () => {
        myRef.current.classList.toggle(classes.Expand);
    }

    const myRef = useRef(null);

    return (
        <React.Fragment>
            <div className={classes.DropDownButton} onClick={dropdownHandler}>&#10225;</div>
                
            <div className={classes.Contacts} ref={myRef}>
                {props.contacts.map(contact => <Contact 
                    contactName={contact.name} 
                    profileImage={contact.profileImage}
                    key={contact.id}    
                    contactClickHandler={() => {
                        props.contactClickHandler(contact);
                        myRef.current.classList.remove(classes.Expand);
                    }}
                />)}
            </div>
        </React.Fragment>
    );
}

export default Contacts;