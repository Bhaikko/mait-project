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
            selectedUserDatingProfile: null,
            selectedUserName: null,
            selectedUserId: null,
            selectedUserProfilePhotos: null,
            selectedUserCommonTags: null,
            loading: true,
            matchFound: false,
            matchedName: ""
        }
    }

    componentDidMount() {
        this.getNewUser();
    }

    getNewUser = () => {
        axios.get('dating/explore')
            .then(response => {
                this.setState({
                    selectedUserDatingProfile: response.data.selectedUserCompleteProfile.datingProfile,
                    selectedUserName: response.data.selectedUserCompleteProfile.name,
                    selectedUserCommonTags: response.data.matchedResult.matchedTags,
                    selectedUserId: response.data.selectedUserCompleteProfile.id,
                    selectedUserProfilePhotos: response.data.selectedUserCompleteProfile.profilePhotos,
                    percentage: response.data.matchedResult.percentage,
                    loading: false,
                });
            })
            .catch(err => {

            });
    }

    likeHandler = () => {
        this.setState({
            loading: true
        });
        axios.post('dating/addMatch', {
            userId: this.state.selectedUserId
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        matchFound: true,
                        loading: false,
                        matchedName: this.state.selectedUserName
                    });
                    Alertify.success(this.state.selectedUserName + " " + response.data.message + "!");
                    
                } else {
                    Alertify.success(response.data.message + " " + this.state.selectedUserName + "!");
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
        if (this.state.selectedUserProfilePhotos) {
            mainPhoto = this.state.selectedUserProfilePhotos.find(photo => photo.main === true);
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
                                        <span className={classes.Name}>{this.state.selectedUserName},</span>
                                        <span className={classes.Age}>{this.state.selectedUserDatingProfile.age || "-"}</span>
                                    </div>
                                    <span className={classes.CollegeName}>{this.state.selectedUserDatingProfile.collegeName || "-"}</span>
                                </div>
                                <div className={classes.MatchboxContainer}>
                                    <span className={classes.Matchbox}>{this.state.percentage}%</span>
                                    <Link to={"/profile/" + this.state.selectedUserId} className={classes.ViewProfile}>Visit Profile</Link>
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
                                {this.state.selectedUserProfilePhotos.length === 0 ? (
                                    <ProfilePhoto 
                                    src={mainPhoto ? mainPhoto.imageUrl : ""}
                                    style={{
                                        width: 300,
                                        height: 300
                                    }}
                                />
                                ) : (
                                    this.state.selectedUserProfilePhotos.map((photo) => (
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
                                        {this.state.selectedUserDatingProfile.about}
                                    </div>
                                </div>
                                <div className={classes.AboutBox}>
                                    <div className={classes.About}><span className={classes.AboutKey}>I'm Currently</span> {this.state.selectedUserDatingProfile.relationshipStatus}</div>
                                    <div className={classes.About}><span className={classes.AboutKey}>Intrested In</span> {this.state.selectedUserDatingProfile.intrestedIn}</div>
                                    <div className={classes.About}><span className={classes.AboutKey}>Graduation From</span> {this.state.selectedUserDatingProfile.collegeName}</div>
                                </div>
                            </div>
                            
                            <div className={classes.TagsContainer}>
                                <div className={classes.TagHeading}>Here's what you too have in common</div>
                                <Tags tags={this.state.selectedUserCommonTags} />
                            </div>

                        </ContentContainer>

                        <SuccessfulMatchModal 
                            show={this.state.matchFound}
                            closeModalHandler={this.keepExploringHandler}
                            likeeName={this.state.matchedName}
                        />
                    </Fragment>
                )}

            </CenterContainer>

        );
    }
}

export default ExplorePage;