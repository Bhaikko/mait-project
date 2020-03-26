import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Dating.css';
import Button from './../../components/UI/Button/Button';
import CenterContainer from './../../components/UI/CenterContainer/CenterContainer';
import LandingpageImage from './../../assets/images/Landingpage.png';

const DatingLandingPage = () => {
    return (
        <CenterContainer classes={classes.CenterContainer}>
            <div className={classes.LeftContainer} >
                <span className={classes.LeftContainerHeader}>
                    Mait Talks <br/>
                    Dating App
                </span>
                <span className={classes.LeftContainerContent}>
                    <p>
                        Hi There. <br />
                        Thank you for showing interest in our dating app. <br/>
                        We will try our best to find you your best match. <br/>
                        But first how about you setup your dating profile. <br/>
                        The more life your profile has, Better the Chances. <br/>
                        Feel Me??? <br />
                        You will see. <br/>
                    </p>
                </span>

                <div className={classes.ButtonContainer}>
                    <Link 
                        to="/me"
                        style={{
                            width: "30%",
                            textAlign: "center",
                            display: "inline-block",
                            textDecoration: "none"
                        }}    
                    >
                        <Button 
                            style={{
                                backgroundColor: "#9D354B"
                            }}
                            classes={classes.Button}
                            
                        >
                            Set-up Profile
                        </Button>

                    </Link>

                    <Link 
                        to="/dating/explore"
                        style={{
                            width: "30%",
                            textAlign: "center",
                            display: "inline-block",
                            textDecoration: "none"
                        }}  
                    >
                        <Button 
                            style={{
                                backgroundColor: "#2D4571"
                            }}
                            classes={classes.Button}
                        >
                            Explore page.
                        </Button>

                    </Link>
                </div>
            </div>
            <div className={classes.RightContainer}>
                <img src={LandingpageImage} className={classes.LandingpageImage} alt="..." />
            </div>

        </CenterContainer>
    );
}

export default DatingLandingPage;