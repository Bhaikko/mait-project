import React from 'react';

import classes from './Logo.css';

const logo = props => {
    return (
        <div className={classes.Logo} style={{...props.style}} >Mait Talks</div>
    );
}

export default logo;