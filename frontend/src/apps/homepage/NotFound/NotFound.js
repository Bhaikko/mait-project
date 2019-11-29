import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.css';

import CenterContainer from '../../../components/UI/CenterContainer/CenterContainer';
;

const NotFoundPage = props => {
    return (
        <CenterContainer classes={classes.CenterContainer}>
            <span className={classes.ErrorMessage}>This page isn't available.</span>
            <span className={classes.ErrorCode}>404</span>
            <div className={classes.Links}>
                <Link to="/" className={classes.Link}>Go to homepage</Link>
                <a href="https://github.com/Bhaikko/mait-project" target="__blank" className={classes.Link}>Report an issue.</a>
            </div>
        </CenterContainer>
    );
}

export default NotFoundPage;