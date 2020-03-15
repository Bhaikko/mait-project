import React from 'react';

import classes from './Button.css';

const Button = props => {
    return (
        <button 
            {...props}
            className={[classes.Button, props.classes].join(" ")}
            style={{...props.style}}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;