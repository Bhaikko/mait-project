import React from 'react';

import classes from './Tag.css';
import CrossIcon from './../../UI/CrossIcon/CrossIcon';

const Tag = props => {
    return (
        <div className={[classes.TagContainer, props.hoverable ? classes.Pointer : ""].join(" ")} onClick={props.clickHandler}>
            {props.children}
            {props.editable ? (
                <CrossIcon onClick={props.deleteTagHandler} classes={classes.CrossIcon}/>
            ) : (
                null
            )}
        </div>
    )
}

export default Tag;