import React from 'react';

import classes from './ContentTitle.css';

import EditIcon from '../EditIcon/EditIcon';

const ContentTitle = props => {
    return (
        <div className={classes.ContentTitleContainer}>
            <span className={classes.ContentTitle}>{props.children}</span>
            {props.editable ? (
                <EditIcon form={props.form}/>
            ) : (
                null
            )}
        </div>
    );
}

export default ContentTitle;