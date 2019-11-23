import React from 'react';

import classes from './CenterContainer.css';

const CenterContainer = props => {
    return (
        <div 
            {...props}
            className={classes.CenterContainer}
            style={props.style}
        >
            {props.children}
        </div>
    );
}

export default CenterContainer;