import React from 'react';

import classes from './HeartIcon.css';
import HeartIconFilled from './../../../assets/icons/Heart_Filled.png';
import HeartIconUnfilled from './../../../assets/icons/Heart_Unfilled.png';

const HeartIcon = props => {
    return (
        <React.Fragment>
            {props.main ? (
                <img 
                    src={HeartIconFilled} 
                    className={[classes.HeartIcon, props.classes].join(" ")} 
                    style={{...props.style}}
                    alt="..."
                />
            ) : (
                <img 
                    src={HeartIconUnfilled} 
                    className={[classes.HeartIcon, props.classes].join(" ")} 
                    style={{...props.style}}
                    alt="..."
                    onClick={props.clickHandler}
                />
                    
            )}
        </React.Fragment>
    );
}

export default HeartIcon;