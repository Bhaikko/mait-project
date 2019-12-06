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
                    style={{...props.style}}
                    alt="..."
                />
            ) : (
                <img 
                    src={HeartIconUnfilled} 
                    className={classes.HeartIcon} 
                    style={{...props.style}}
                    alt="..."
                    onClick={props.clickHandler}
                />
                    
            )}
        </React.Fragment>
    );
}

export default HeartIcon;