import React from 'react';

import classes from './Tag.css';
import TagImage from './../../../assets/images/Tag.png';
import CrossIcon from './../../UI/CrossIcon/CrossIcon';

const Tag = props => {
    return (
        <div className={classes.Container}>
            <img 
                className={classes.Tag}
                src={TagImage}
                alt="..."
            />
            <div className={classes.TagName}>
                {props.children}
            </div>

            <CrossIcon />
        </div>
        
    );
}

export default Tag;