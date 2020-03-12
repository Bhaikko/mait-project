import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ComingSoon.css';
import CenterContainer from './../../components/UI/CenterContainer/CenterContainer';

const ComingSoon = () => {
    return (
        <CenterContainer classes={classes.CenterContainer}>
            <div className={classes.ComingSoon}>
                Coming Soon. Stay Tuned !!!
            </div>
            <div className={classes.Links}>
                <Link to="/" className={classes.Link}>Go to homepage</Link>
                <a href="https://github.com/Bhaikko/mait-project" target="__blank" className={classes.Link}>Report an issue.</a>
            </div>
        </CenterContainer>
    )
}

export default ComingSoon;