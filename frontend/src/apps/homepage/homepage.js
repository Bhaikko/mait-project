import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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

import * as authActions from './../../store/actions/index';

class Homepage extends Component {
    render () {
        return (
            <div className={classes.Homepage}>
                <div className={classes.CardContainer}>
                    <HomepageCard style={{ backgroundColor: "#9D354B", order: 2}} >
                        <Fragment>
                            <Logo style={{fontSize: 40}} />
                            <Infos />
                        </Fragment>
                    </HomepageCard>

                    <HomepageCard style={{ backgroundColor: "#2D4571", order: 1}} >
                        {this.props.token ? (
                            <Fragment>
                                <p className={classes.LoggedIn}>
                                    <span style={{fontSize: 40}}>Hi {this.props.username}</span>, <br /> 
                                    Thank You Joining Us.   <br />
                                    Get Started by choosing one of the Communities Below.   <br />
                                    Have Fun.
                                </p>
                                <Button
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        top: 20
                                    }}
                                    onClick={this.props.onLogout}
                                >
                                    Log-out
                                </Button>
                            </Fragment>
                        ) : (
                            <Fragment>
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
                            </Fragment>
                        )}
                    </HomepageCard>

                    <HomepageCard style={{ backgroundColor: "#2D4571", order: 3}}  >
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
                    <HomepageCard style={{ backgroundColor: "#9D354B", order: 4}}  >
                        <div className={classes.CommunityTitle}>Communities</div>
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

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        username: state.auth.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);