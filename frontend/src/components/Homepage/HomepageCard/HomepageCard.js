import React from 'react';

import classes from './HomepageCard.css';

const HomepageCard = props => {
    return (
        <div className={classes.Card} style={{...props.style}}>
            {props.children}
        </div>
    );
}

export default HomepageCard;