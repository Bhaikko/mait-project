import React from 'react';

import classes from './DefaultProfile.css';
import DefaultProfileIcon from './../../../assets/icons/DefaultProfile.jpeg';

const DefaultProfile = props => {
    return (
        <div 
            className={classes.DefaultProfileContainer}
            {...props}
        >
            <img 
                className={classes.DefaultProfileIcon} 
                src={DefaultProfileIcon} 
                alt="..." 
                onClick={props.clickHandler}
            />

        </div>
    );
}

export default DefaultProfile;