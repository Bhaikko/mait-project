import React from 'react';

import classes from './Logo.css';
import { Link } from 'react-router-dom';

const logo = props => {
    return (
        <Link 
            to="/" 
            style={{ 
                textDecoration: "none",
                ...props.style 
            }} 
            className={[classes.Logo, props.classes].join(" ")}
            
        > 
            Mait Talks
        </Link>
    );
}

export default logo;