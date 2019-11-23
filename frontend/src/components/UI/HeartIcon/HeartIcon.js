import React from 'react';

import classes from './HeartIcon.css';
import HeartIconFilled from './../../../assets/icons/Heart_Filled.png';
import HeartIconUnfilled from './../../../assets/icons/Heart_Unfilled.png';

const HeartIcon = props => {
    return (
        <React.Fragment>
            {props.fill === "true" ? (
                <img 
                    src={HeartIconFilled} 
                    className={classes.HeartIcon} 
                    {...props}
                    alt="..."
                />
            ) : (
                <img 
                    src={HeartIconUnfilled} 
                    className={classes.HeartIcon} 
                    {...props}
                    alt="..."
                />
                    
            )}
        </React.Fragment>
    );
}

export default HeartIcon;