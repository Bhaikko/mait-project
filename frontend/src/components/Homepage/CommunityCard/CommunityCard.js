import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CommunityCard.css';

const communityCard = props => {
    return (
        <Link 
            to={props.link}
            style={{ textDecoration: "none" }}
        >
            <div className={classes.CommunityCard}>
                <img className={classes.CommunityCardImage} src={props.backgroundImage} alt="..."/>
                <div className={classes.CommunityCardText}>
                    {props.children}
                </div>
            </div>
        </Link>
    );
}

export default communityCard;