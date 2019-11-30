import React from 'react';

import classes from './CrossIcon.css';
import Cross from './../../../assets/icons/Cross.png';

const CrossIcon = props => {
    return (
        <img
            {...props}
            src={Cross} 
            alt="..." 
            className={classes.CrossIcon}
            
        />
    );
}

export default CrossIcon;