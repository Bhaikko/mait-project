import React from 'react';

import classes from './ContentTitle.css';

const ContentTitle = props => {
    return (
        <div className={classes.ContentTitleContainer}>
            <span className={classes.ContentTitle}>{props.children}</span>
        </div>
    );
}

export default ContentTitle;