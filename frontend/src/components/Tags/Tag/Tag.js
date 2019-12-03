import React from 'react';

import classes from './Tag.css';
import TagImage from './../../../assets/images/Tag.png';
import CrossIcon from './../../UI/CrossIcon/CrossIcon';

const Tag = props => {
    return (
        <div className={classes.Container} onClick={props.clickHandler}>
            <img 
                className={classes.Tag}
                src={TagImage}
                alt="..."
            />
            <div className={classes.TagName}>
                {props.children}
            </div>

            {props.editable ? (
                <CrossIcon />
            ) : (
                null
            )}
        </div>
        
    );
}

export default Tag;