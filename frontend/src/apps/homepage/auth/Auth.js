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
                backgroundColor: "#9D354B",
                padding: 10
            }}>
                <LoginForm />
                
                <div className={classes.SignUpLink} onClick={() => scrollToRef(myRef)}>
                    Sign Up
                </div>
            </HomepageCard>
            
            <HomepageCard 
                style={{ 
                    backgroundColor: "#2D4571",
                    padding: 10
                }} 
                refprop={myRef}
            >
                <SignupForm />    
            </HomepageCard>
            
        </div>
    );
}

export default Auth;