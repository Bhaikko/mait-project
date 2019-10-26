import React from 'react';

import classes from './Login.css';
import LoginForm from './LoginForm/LoginForm';

const Login = props => {
    return (
        <div className={classes.Login}>
            <LoginForm />
        </div>
    );
}

export default Login;