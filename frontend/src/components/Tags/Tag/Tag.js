import React from 'react';

import classes from './Tag.css';

const Tag = props => {
    return (
        <div className={classes.Tag}>{props.children}</div>
    );
}

export default Tag;