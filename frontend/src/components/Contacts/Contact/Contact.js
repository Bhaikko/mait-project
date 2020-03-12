import React from 'react';

import classes from './Contact.css';

import ProfileName from '../../Profile/ProfileName/ProfileName';
import ProfilePhoto from '../../Profile/ProfilePhotos/ProfilePhoto/ProfilePhoto';

const Contact = props => {
    return (
        <div 
            className={[
                classes.Contact, 
                props.isCurrentContact ? classes.Selected : "", 
                props.notify ? classes.Notification : ""
            ].join(" ")} 
            onClick={props.contactClickHandler}
        >
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
                {props.isOnline ? (
                    <div className={classes.OnlineIndicator}> online</div>
                ) : (    
                    <div className={classes.OfflineIndicator}> offline</div>
                )}
            </div>        
        </div>
    );
}

export default Contact;