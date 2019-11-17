import React from 'react';

import classes from './Logo.css';
import { Link } from 'react-router-dom';

const logo = props => {
    return (
<Link to="/" style={{ textDecoration: "none" }} ><div className={classes.Logo} style={{...props.style}} > Mait Talks</div> </Link>
    );
}

export default logo;