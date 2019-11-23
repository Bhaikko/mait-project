import React from 'react';

import classes from './AddNew.css';
import AddIcon from './../../../assets/icons/Add.png';

const AddNew = props => {
    return (
        <div 
            className={classes.AddNewContainer}
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

export default AddNew;