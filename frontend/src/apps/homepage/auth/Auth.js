import React from 'react';


import HomepageCard from './../../../components/Homepage/HomepageCard/HomepageCard';
import classes from './Auth.css';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';


const Login = props => {
    const myRef = React.useRef(null);
    const scrollToRef = (ref) => window.scrollTo({left : 0, top : ref.current.offsetTop, behavior : 'smooth'});
    function handleClick() {
        scrollToRef(myRef);
      }
    return (
        <div className={classes.Auth}>
            <HomepageCard style={{ 
                backgroundColor: "#9D354B",
                padding: 10
            }}>
                <LoginForm />
                
                <div className={classes.signupLink} onClick={handleClick}>
                    Sign Up
                </div>
            </HomepageCard>
            
            <HomepageCard style={{ 
                backgroundColor: "#2D4571",
                padding: 10
            }} refprop={myRef}>
                <SignupForm />
                
            </HomepageCard>
            
        </div>
    );
}

export default Login;