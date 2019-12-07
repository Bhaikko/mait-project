import React from 'react';

import classes from './Tag.css';
import TagImage from './../../../assets/images/Tag.png';
import CrossIcon from './../../UI/CrossIcon/CrossIcon';

const Tag = props => {
    return (
        <div className={[classes.Container, props.hoverable ? classes.Pointer : ""].join(" ")} onClick={props.clickHandler}>
            <img 
                className={classes.Tag}
                src={TagImage}
                alt="..."
            />
            <div className={classes.TagName}>
                {props.children}
            </div>

            {props.editable ? (
                <CrossIcon clickhandler={props.deleteTagHandler}/>
            ) : (
                null
            )}
        </div>
        
    );
}

export default Tag;