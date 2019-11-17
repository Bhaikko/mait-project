import React from 'react';

import classes from './ProfileImage.css';

const ProfileImage = props => {
    return (
        <img 
            {...props}
            className={classes.ProfilePhoto}
            alt={props.alt}
            style={props.style}
        />
    );
}

export default ProfileImage;