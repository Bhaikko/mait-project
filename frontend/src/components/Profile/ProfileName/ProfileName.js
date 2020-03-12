import React from 'react';

import classes from './ProfileName.css';

const ProfileName = props => {
    return (
        <div className={classes.ProfileName} {...props} >{props.children}</div>
    );
}

export default ProfileName;