import React from 'react';

import classes from './NavigationItems.css';


const NavigationItems = props => {
    return (
        <div className={classes.NavigationItems}>
            {props.navigationItems}
        </div>
    );
}

export default NavigationItems;