import React, { useRef } from 'react';

import HomepageCard from './../../../components/Homepage/HomepageCard/HomepageCard';
import classes from './Auth.css';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';


const Auth = props => {
    const myRef = useRef(null);
    const scrollToRef = (ref) => window.scrollTo({left : 0, top : ref.current.offsetTop, behavior : 'smooth'});
    
    return (
        <div className={classes.Auth}>
            <HomepageCard style={{ 
                padding: 20,
                paddingBottom: 0
            }}>
                <LoginForm />
                
                <div className={classes.SignUpLink} onClick={() => scrollToRef(myRef)}>
                    Sign Up
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