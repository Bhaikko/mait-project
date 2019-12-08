import React from 'react';

import classes from './PeopleCard.css';

const peopleCard = props => {
    return (
        <div>
            <div className={classes.PeopleCard}>
                {props.name}
            </div>
            <div className={classes.PeopleCard}>
                {props.designation}
            </div>
        </div>
    );
}

export default peopleCard;