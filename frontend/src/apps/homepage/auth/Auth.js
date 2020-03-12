import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import HomepageCard from './../../../components/Homepage/HomepageCard/HomepageCard';
import classes from './Auth.css';
import LoginForm from './../../../containers/Forms/Homepage/LoginForm/LoginForm';
import SignupForm from './../../../containers/Forms/Homepage/SignupForm/SignupForm';


const Auth = props => {
    const token = useSelector(state => state.auth.token);
    const myRef = useRef(null);
    const scrollToRef = (ref) => window.scrollTo({left : 0, top : ref.current.offsetTop, behavior : 'smooth'});
    
    if (token) {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div className={classes.Auth}>
            <HomepageCard style={{ 
                padding: 20,
                paddingBottom: 0
            }}>
                <LoginForm />
                
                <div className={classes.SignUpLink} onClick={() => scrollToRef(myRef)}>
                    Sign Up Here
                </div>
            </HomepageCard>
            
            <HomepageCard 
                style={{ 
                    padding: 20
                }} 
                refprop={myRef}
            >
                <SignupForm />    
            </HomepageCard>
            
        </div>
    );
}

export default Auth;