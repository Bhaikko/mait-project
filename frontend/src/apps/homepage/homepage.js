import React, { Component } from 'react';

import classes from './homepage.css';
import Logo from './../../components/Logo/Logo';
import Infos from './../../components/Homepage/Infos/Infos';
import HomepageCard from './../../components/Homepage/HomepageCard/HomepageCard';
import Button from './../../components/UI/Button/Button';

class Homepage extends Component {
    render () {
        return (
            <div className={classes.Homepage}>
                <div className={classes.CardsContainer}>
                    <HomepageCard style={{ backgroundColor: "#9D354B"}} >
                        <Logo style={{fontSize: 40}} />
                        <Infos />
                    </HomepageCard>
                    <HomepageCard style={{ backgroundColor: "#2D4571"}} >
                        <div>
                            <Logo style={{fontSize: 40}} />
                            <Button style={{marginLeft: 50}}>Login</Button>
                        </div>
                        <div style={{fontSize: 20, color: "white", marginTop: 20}}>
                            A place to talk and have <br />
                            community-based discussions <br />
                            with like-minded people. <br />
                        </div>
                        <div style={{fontSize: 20, color: "white", marginTop: 20}}>
                            Join Mait Talks today.
                            <Button style={{marginLeft: 50}}>Sign Up</Button>
                        </div>
                    </HomepageCard>
                    <HomepageCard style={{ backgroundColor: "#2D4571"}} >
                        <div className={classes.PeopleTitle}>The People</div>
                        <div className={classes.PeopleContainer}>
                            <div>
                                <div className={classes.PeopleBox}>
                                    Sarthak Mittal
                                </div>
                                <div className={classes.PeopleBox}>
                                    Web Developer
                                </div>
                            </div>
                            <div>
                                <div className={classes.PeopleBox}>
                                    Khush Khanna
                                </div>
                                <div className={classes.PeopleBox}>
                                    UI/UX Designer
                                </div>
                            </div>
                            <div>
                                <div className={classes.PeopleBox}>
                                    Siddharth Pawar
                                </div>
                                <div className={classes.PeopleBox}>
                                    Web Developer
                                </div>
                            </div>
                        </div>
                    </HomepageCard>
                    <HomepageCard style={{ backgroundColor: "#9D354B"}} >
                        <Logo />
                        <Infos />
                    </HomepageCard>
                </div>
            </div>
        );
    }
}

export default Homepage;