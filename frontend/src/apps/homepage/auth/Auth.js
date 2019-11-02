import React from 'react';


import HomepageCard from './../../../components/Homepage/HomepageCard/HomepageCard';
import classes from './Auth.css';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';


const Login = props => {
    return (
        <div className={classes.Auth}>
            <HomepageCard style={{ 
                backgroundColor: "#9D354B",
                padding: 100
            }} class="Card">
                <LoginForm />
            </HomepageCard>
            <HomepageCard style={{ 
                backgroundColor: "#2D4571",
                padding: 100
            }} class="Card">
                <SignupForm />
            </HomepageCard>
        </div>
    );
}

export default Login;