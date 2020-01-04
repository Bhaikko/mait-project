import React from 'react';

import classes from './Contact.css';

import ProfileName from '../../ProfileName/ProfileName';
import ProfilePhoto from '../../ProfilePhotos/ProfilePhoto/ProfilePhoto';

const Contact = props => {
    return (
        <div className={classes.Contact} onClick={props.contactClickHandler}>
            <ProfilePhoto 
                src={props.profileImage}
                alt="..." 
                style={{
                    height: 50,
                    width: 50
                }}
                borderRadius="50%"    
            />
            <div className={classes.Info1}>
                <ProfileName>{props.contactName}</ProfileName>
                {/* <div className={classes.LastMessage}>{props.lastMessage}</div> */}
            </div>
            {/* <div className={classes.Time}>14:45</div> */}
        
        </div>
    );
}

export default Contact;