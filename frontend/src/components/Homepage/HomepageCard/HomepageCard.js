import React from 'react';

import classes from './HomepageCard.css';

const HomepageCard = props => {
    let clsname = "Card";
    if(props.class){
        clsname=props.class;
    }

    return (
        <div className={classes[clsname]} style={{...props.style}}>
            {props.children}
        </div>
    );
}

export default HomepageCard;