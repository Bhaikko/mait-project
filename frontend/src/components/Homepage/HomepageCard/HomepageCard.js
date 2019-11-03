import React from 'react';

import classes from './HomepageCard.css';

const HomepageCard = props => {
    let styles = {...props.style};
    if (window.innerWidth > 576) {
        styles.order = 0;
    }
    return (
        <div className={classes.Card} style={styles}>
            {props.children}
        </div>
    );
}

export default HomepageCard;