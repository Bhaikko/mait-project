import React, { useRef } from 'react';

import Contact from './Contact/Contact';
import classes from './Contacts.css';
import downarrow from './../../assets/icons/dropdown-arrow.png';

const Contacts = props => {
    const dropdownHandler = () => {
        myRef.current.classList.toggle(classes.Expand);
        props.downClickHandler();
    }

    const myRef = useRef(null);
    return (
        <React.Fragment>
            <div 
                className={classes.DropDownButton} 
                onClick={dropdownHandler}
            >
                <img 
                    className={classes.Downarrow} 
                    src={downarrow} 
                    alt="dropdown" 
                />
            </div>
                
            <div className={classes.Contacts} ref={myRef}>
                {props.contacts.map((contact, index) => <Contact 
                    contactName={contact.name} 
                    profileImage={contact.profileImage}
                    key={contact.id}    
                    contactClickHandler={() => {
                        props.contactClickHandler(contact, index);
                        myRef.current.classList.remove(classes.Expand);
                        
                        props.downClickHandler();
                    }}
                    notify={contact.showNotification}
                />)}
            </div>
        </React.Fragment>
    );
}

export default Contacts;