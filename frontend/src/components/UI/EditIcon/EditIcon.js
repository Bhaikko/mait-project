import React from 'react';

import classes from './EditIcon.css';

import editIcon from './../../../assets/icons/Edit.png';

const EditIcon = props => {
    return (
        <img 
            src={editIcon} 
            className={classes.Icon} 
            alt="EditIcon" 
        />
    );
}

export default EditIcon;