import React from 'react';

import classes from './AddNewPhoto.css';
import AddIcon from './../../../assets/icons/Add.png';

const AddNewPhoto = props => {
    return (
        <div 
            className={classes.AddNewContainer}
            onClick={props.clickHandler}
            {...props}
        >
            <img 
                className={classes.AddNewIcon} 
                src={AddIcon} 
                alt="..." 
                onClick={props.clickHandler}
            />

        </div>
    );
}

export default AddNewPhoto;