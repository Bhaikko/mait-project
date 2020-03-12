import React from 'react';

import classes from './ProfileInfo.css';

const ProfileInfo = props => {
    return (
        <div className={classes.InfoContainer} {...props}>
            <img src={props.infoimage} className={classes.InfoImage} alt="GradIcon" />
            <span className={classes.InfoContent}>{props.children}</span>
        </div>
    );
}

export default ProfileInfo;