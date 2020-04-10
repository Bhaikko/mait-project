import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from './../../../axios';

import classes from './Explore.css';
import Button from './../../../components/UI/Button/Button';
import Spinner from './../../../components/UI/Spinner/Spinner';
import Tags from './../../../components/Tags/Tags';
import CenterContainer from './../../../components/UI/CenterContainer/CenterContainer';
import ContentContainer from './../../../components/UI/ContentContainer/ContentContainer';
import ProfilePhoto from './../../../components/Profile/ProfilePhotos/ProfilePhoto/ProfilePhoto';
import Alertify from '../../../utilities/Aleretify/Alertify';
import SuccessfulMatchModal from './../../../components/SuccessfulMatchModal/SuccessfulMatchModal';

class ExplorePage extends Component {

    constructor (props) {
        super(props);        

        this.state = {
            selectedUser: null,
            loading: true,
            matchFound: false,
        }
    }

    componentDidMount() {
        this.getNewUser();
    }

    getNewUser = () => {
        axios.get('dating/explore')
            .then(response => {
                this.setState({
                    selectedUser: response.data.selectedUser,
                    percentage: response.data.matchedResult.percentage,
                    commonTags: response.data.matchedResult.matchedTags,
                    loading: false 
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    likeHandler = () => {
        this.setState({
            loading: true
        });
        axios.post('dating/addMatch', {
            userId: this.state.selectedUser.id 
        })
            .then(response => {
                if (response.status === 200) {
                    Alertify.success(this.state.selectedUser.name + " " + response.data.message + "!");
                    this.setState({
                        matchFound: true
                    });
                } else {
                    Alertify.success(response.data.message + " " + this.state.selectedUser.name + "!");
                }
                this.getNewUser();
            })
            .catch(() => {});
    }

    keepExploringHandler = () => {
        this.setState({
            matchFound: false,
            navigate: false
        });
    }

    passHandler = () => {
        this.setState({
            loading: true
        });
        this.getNewUser();
    }

    render () {
        let mainPhoto = null;
        if (this.state.selectedUser) {
            mainPhoto = this.state.selectedUser.profilePhotos.find(photo => photo.main === true);
        }
        
        return (
            <CenterContainer>
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <Fragment>
                        <ContentContainer classes={classes.ContentContainer}>
                            <div className={classes.ProfileSection}>
                                <div className={classes.InfoContainer}>
                                    <div className={classes.NameAgeContainer}>
                                        <span className={classes.Name}>{this.state.selectedUser.name},</span>
                                        <span className={classes.Age}>{this.state.selectedUser.datingProfile.age || "-"}</span>
                                    </div>
                                    <span className={classes.CollegeName}>{this.state.selectedUser.datingProfile.collegeName || "-"}</span>
                                </div>
                                <div className={classes.MatchboxContainer}>
                                    <span className={classes.Matchbox}>{this.state.percentage}%</span>
                                    <Link to={"/profile/" + this.state.selectedUser.id} className={classes.ViewProfile}>Visit Profile</Link>
                                </div>
                                <Button 
                                    style={{
                                        backgroundColor: "#fa8575",
                                        left: "20%"                                    
                                    }}
                                    classes={classes.Button}
                                    onClick={this.passHandler}
                                >
                                    &#10005; <span style={{fontSize: "14px"}}>Pass</span>
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: "#ffbe25",
                                        left: "60%"
                                    }}
                                    classes={classes.Button}
                                    onClick={this.likeHandler}
                                >
                                    &#x2764; <span style={{fontSize: "14px"}}>Like</span>
                                </Button>
                            </div>

                            <div className={classes.DesktopPhotos}>
                                {this.state.selectedUser.profilePhotos.length === 0 ? (
                                    <ProfilePhoto 
                                    src={mainPhoto ? mainPhoto.imageUrl : ""}
                                    style={{
                                        width: 300,
                                        height: 300
                                    }}
                                />
                                ) : (
                                    this.state.selectedUser.profilePhotos.map((photo, index) => (
                                        <ProfilePhoto 
                                            src={photo.imageUrl}
                                            style={{
                                                width: 250,
                                                height: 300,
                                                margin: 10
                                            }}
                                            key={photo.id}
                                        />
                                    ))
                                )}
                            </div>
                            <div className={classes.MainFooter}>If you like each other, we'll let you know!</div>

                            <div className={classes.MobilePhoto}>
                                <ProfilePhoto 
                                    src={mainPhoto ? mainPhoto.imageUrl : ""}
                                    style={{
                                        width: "60%",
                                        height: "50%"
                                    }}
                                />
                            
                            </div>


                            <div className={classes.AboutSection}>
                                <div className={classes.SelfSummaryBox}>
                                    <div className={classes.SelfSummaryBoxHeader}>
                                        My Self-Summary
                                    </div>
                                    <div className={classes.SelfSummaryBoxContent}>
                                        {this.state.selectedUser.datingProfile.about}
                                    </div>
                                </div>
                                <div className={classes.AboutBox}>
                                    <div className={classes.About}><span className={classes.AboutKey}>I'm Currently</span> {this.state.selectedUser.datingProfile.relationshipStatus}</div>
                                    <div className={classes.About}><span className={classes.AboutKey}>Intrested In</span> {this.state.selectedUser.datingProfile.intrestedIn}</div>
                                    <div className={classes.About}><span className={classes.AboutKey}>Graduation From</span> {this.state.selectedUser.datingProfile.collegeName}</div>
                                </div>
                            </div>
                            
                            <div className={classes.TagsContainer}>
                                <div className={classes.TagHeading}>Here's what you too have in common</div>
                                <Tags tags={this.state.commonTags} />
                            </div>

                        </ContentContainer>

                        <SuccessfulMatchModal 
                            show={this.state.matchFound}
                            closeModalHandler={this.keepExploringHandler}
                            likeeName={this.state.selectedUser.name}
                        />
                    </Fragment>
                )}

            </CenterContainer>

        );
    }
}

export default ExplorePage;