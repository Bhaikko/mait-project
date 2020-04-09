import React from 'react';

import classes from './CrossIcon.css';
import Cross from './../../../assets/icons/Cross.png';
import WhiteCross from './../../../assets/icons/cross-icon.png';

const CrossIcon = props => {
    return (
        <div onClick={props.onClick} className={props.classes}>
            <img
                style={{...props.style}}
                src={props.color === 'white' ? WhiteCross:Cross} 
                alt="..." 
                className={classes.CrossIcon}
            />
        </div>
    );
}

export default CrossIcon;