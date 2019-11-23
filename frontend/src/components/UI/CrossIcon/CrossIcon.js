import React from 'react';

import classes from './CrossIcon.css';
import Cross from './../../../assets/icons/Cross.png';

const CrossIcon = props => {
    return (
        <img
            {...props}
            onClick={props.clickHandler} 
            src={Cross} 
            alt="..." 
            className={classes.CrossIcon}

        />
    );
}

export default CrossIcon;