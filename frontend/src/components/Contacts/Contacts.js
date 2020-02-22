import React, { useRef } from 'react';

import Contact from './Contact/Contact';
import classes from './Contacts.css';
import downarrow from './../../assets/icons/dropdown-arrow.png';

const Contacts = props => {
    const dropdownHandler = () => {
        if (!props.currentContact) {
            myRef.current.classList.toggle(classes.ExpandAll);
        } else {
            myRef.current.classList.toggle(classes.Expand);
        }
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
                    }}
                    notify={contact.showNotification}
                    isOnline={contact.isOnline}
                    isCurrentContact={(() => {
                        if (props.currentContact) {
                            if (props.currentContact.id === contact.id) {
                                return true;
                            }
                            return false;
                        }
                        return false;
                    })()}
                />)}
            </div>
        </React.Fragment>
    );
}

export default Contacts;