import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './homepage.css';
import Logo from './../../components/Logo/Logo';
import Infos from './../../components/Homepage/Infos/Infos';
import HomepageCard from './../../components/Homepage/HomepageCard/HomepageCard';
import Button from './../../components/UI/Button/Button';

import DatingBackground from './../../assets/images/dating.jpeg';
import FeedBackground from './../../assets/images/feed.jpeg';
import MarketplaceBackground from './../../assets/images/marketplace.jpeg';

import PeopleCard from './../../components/Homepage/PeopleCard/PeopleCard';
import CommunityCard from './../../components/Homepage/CommunityCard/CommunityCard';

class Homepage extends Component {
    render () {
        return (
            <div className={classes.Homepage}>
                <div className={classes.CardContainer}>
                    <HomepageCard style={{ backgroundColor: "#9D354B"}} >
                        <Logo style={{fontSize: 40}} />
                        <Infos />
                    </HomepageCard>

                    <HomepageCard style={{ backgroundColor: "#2D4571"}} >
                        <div>
                            <Logo style={{fontSize: 40}} />
                            <Link
                                to="/auth"
                            >
                                <Button style={{marginLeft: 50}}>Login</Button>
                            </Link>
                        </div>
                        <div style={{fontSize: 20, color: "white", marginTop: 20}}>
                            A place to talk and have <br />
                            community-based discussions <br />
                            with like-minded people. <br />
                        </div>
                        <div style={{fontSize: 20, color: "white", marginTop: 20}}>
                            Join Mait Talks today.
                            <Link 
                                to="/auth"
                            >
                                <Button style={{marginLeft: 50}}>Sign Up</Button>
                            </Link>
                        </div>
                    </HomepageCard>

                    <HomepageCard style={{ backgroundColor: "#2D4571"}} >
                        <div className={classes.PeopleTitle}>The People</div>
                        <div className={classes.PeopleHolder}>
                            <PeopleCard
                                name="Sarthak Mittal"
                                designation="Web Developer"
                            />

                            <PeopleCard
                                name="Khush Khanna"
                                designation="UI/UX Designer"
                            />

                            <PeopleCard
                                name="Siddharth Pawar"
                                designation="Web Developer"
                            />
                            
                        </div>
                    </HomepageCard>
                    <HomepageCard style={{ backgroundColor: "#9D354B"}} >
                        <div className={classes.CommunityTitle}>The Communities</div>
                        <div className={classes.CommunityContainer}>
                            <CommunityCard
                                link="/dating"
                                heading="Dating"
                                backgroundImage={DatingBackground}
                            />

                            <CommunityCard
                                link="/feed"
                                heading="Feed"
                                backgroundImage={FeedBackground}
                            />

                            <CommunityCard
                                link="/marketplace"
                                heading="Marketplace"
                                backgroundImage={MarketplaceBackground}
                            />

                            <CommunityCard
                                link="/notes"
                                heading="Notes"
                                backgroundImage={MarketplaceBackground}
                            />

                        </div>
                    </HomepageCard>
                </div>
                <div className={classes.AboutContainer}>
                    Mait talks is an open source project. If you would like to report an issue or conribute to the project. Feel free to visit our github page.
                </div>
                <div className={classes.AboutContainer}>
                    c Copyright 2019. Mait Talks
                </div>
            </div>
        );
    }
}

export default Homepage;