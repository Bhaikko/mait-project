import React from 'react';

import classes from './Contact.css';

import ProfileName from './../../../../components/ProfileName/ProfileName';
import ProfileImage from './../../../../components/ProfileImage/ProfileImage';

const Contact = props => {
    return (
        <div className={classes.Contact} onClick={props.contactClickHandler}>
            <ProfileImage src={props.profileImage} alt="..." />
            <div className={classes.Info1}>
                <ProfileName>{props.contactName}</ProfileName>
                {/* <div className={classes.LastMessage}>{props.lastMessage}</div> */}
            </div>
            {/* <div className={classes.Time}>14:45</div> */}
        
        </div>
    );
}

export default Contact;