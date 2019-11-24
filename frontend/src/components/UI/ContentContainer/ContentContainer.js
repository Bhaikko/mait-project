import React from 'react';

import classes from './ContentContainer.css';

const ContentContainer = props => {
    return (
        <div 
            className={[classes.ContentContainer, props.classes].join(" ")}
            {...props}
        >
            {props.children}
        </div>
    )
}

export default ContentContainer;