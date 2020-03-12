import React from 'react';

import classes from './Info.css';

const Info = props => {
    return (
        <div className={classes.Info}>
            <img className={classes.InfoImage} src={props.icon} alt={props.title} />
            <span className={classes.InfoText}>{props.title}</span>
        </div>
    );
}

export default Info;