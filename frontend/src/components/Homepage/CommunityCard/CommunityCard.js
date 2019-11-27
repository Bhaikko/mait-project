import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CommunityCard.css';

const communityCard = props => {
    return (
        <Link 
            to={props.link}
            style={{ textDecoration: "none" }}
        >
            <div className={classes.CommunityCard} style={{backgroundImage: `url(${props.backgroundImage})`}}>
                {props.children}
            </div>
        </Link>
    );
}

export default communityCard;