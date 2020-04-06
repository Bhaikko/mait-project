import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './homepage.css';
import Logo from './../../components/Logo/Logo';
import Infos from './../../components/Homepage/Infos/Infos';
import Button from './../../components/UI/Button/Button';


import DatingBackground from './../../assets/images/dating.jpeg';
import FeedBackground from './../../assets/images/feed.jpeg';
import MarketplaceBackground from './../../assets/images/marketplace.jpeg';
import NotesBackground from './../../assets/images/notes.jpeg';
import GithubIcon from './../../assets/icons/Github.png';

import HomepageCard from './../../components/Homepage/HomepageCard/HomepageCard';
import PeopleCard from './../../components/Homepage/PeopleCard/PeopleCard';
import CommunityCard from './../../components/Homepage/CommunityCard/CommunityCard';


import * as authActions from './../../store/actions/index';

import UserDetail from './../../utilities/UserDetail';


class Homepage extends Component {


    render () {
        return (
            <div className={classes.Homepage}>
                <div className={classes.CardContainer}>
                    <HomepageCard >
                        <Fragment>
                            <Logo style={{fontSize: 40}} />
                            <Infos />
                        </Fragment>
                    </HomepageCard>

                    <HomepageCard >
                        {this.props.token ? (
                            <Fragment>
                                <div className={classes.LoggedIn}>
                                    <span className={classes.GreetingMessage}>Hi {UserDetail.get_username()}</span>, <br /> 
                                    <p style={{
                                        fontSize: "0.7em"
                                    }}
                                    >
                                        Thank You Joining Us.   <br />
                                        Get Started by choosing one of the Communities Below.   <br />
                                        Have Fun.
                                    </p>
                                </div>
                                <Button
                                    classes={classes.LogoutButton}
                                    onClick={this.props.onLogout}
                                >
                                    Log-out
                                </Button>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <div className={classes.LoginContainer}>
                                    <Logo classes={classes.Logo} />
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
                                <div className={classes.SignupContainer}>
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

                    <HomepageCard >
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
                    <HomepageCard >
                        <div className={classes.CommunityTitle}>Communities</div>
                        <div className={classes.CommunityContainer}>
                            <CommunityCard
                                link="/dating"
                                backgroundImage={DatingBackground}
                            >
                                Dating
                            </CommunityCard>
                            <CommunityCard
                                link="/feed"
                                backgroundImage={FeedBackground}
                            >
                                Feed
                            </CommunityCard>

                            <CommunityCard
                                link="/marketplace"
                                backgroundImage={MarketplaceBackground}
                            >
                                Marketplace
                            </CommunityCard>

                            <CommunityCard
                                link="/notes"
                                backgroundImage={NotesBackground}
                            >
                                Notes
                            </CommunityCard>

                        </div>
                    </HomepageCard>
                </div>
                <div className={classes.FooterContainer}>
                    <div className={classes.UpperFooter}>
                        <div className={classes.UpperLeft}>
                            <div className={classes.FooterTitle}>
                                About
                            </div>
                            <div className={classes.AboutContent}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div className={classes.UpperRight} >
                            <Logo style={{
                                fontSize: 40
                            }} />
                            thecollegetalks@gmail.com <br />
                        </div>
                    </div>
                    <div className={classes.FooterDivider}></div>

                    <div className={classes.LowerFooter}>
                        <div className={classes.LowerFooterContent}>
                            Copyright &copy; 2020. All Rights Reserved by College Talks
                        </div>
                        <a href="https://github.com/Bhaikko/mait-project" className={classes.GithubLink} target="__blank">
                            <img src={GithubIcon} alt=" " />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);