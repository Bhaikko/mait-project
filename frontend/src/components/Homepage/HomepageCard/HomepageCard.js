import React from 'react';

import classes from './HomepageCard.css';

const HomepageCard = props => {
    let styles = {...props.style};

    return (
        <div className={[classes.Card, props.classes].join(" ")} style={styles} ref={props.refprop} {...props}>
            {props.children}
        </div>
    );
}

export default HomepageCard;