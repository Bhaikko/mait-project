import React, { Component, Fragment } from 'react';

import classes from './UserProfile.css';

import CenterContainer from './../../components/UI/CenterContainer/CenterContainer';
import ContentContainer from './../../components/UI/ContentContainer/ContentContainer';

import Tabs from './../../components/UI/Tabs/Tabs';
import ContentTitle from './../../components/UI/ContentTitle/ContentTitle';
import ProfilePhoto from './../../components/Profile/ProfilePhotos/ProfilePhoto/ProfilePhoto';
import ProfileInfo from './../../components/Profile/ProfileInfo/ProfileInfo';
import ProfileName from './../../components/Profile/ProfileName/ProfileName';
import Tags from './../../components/Tags/Tags';
import ProfilePhotos from './../../components/Profile/ProfilePhotos/ProfilePhotos';
import Button from './../../components/UI/Button/Button';
import SubmitReport from './../SubmitReport/SubmitReport';

import GradIcon from './../../assets/icons/grad-cap.png';
import HeartIcon from './../../assets/icons/Heart.png';
import AgeIcon from './../../assets/icons/Age.png';
import UsernameIcon from './../../assets/icons/Username.png';
import MailIcon from './../../assets/icons/mail.png';
import InterestIcon from './../../assets/icons/Interest.png';
import GenderIcon from './../../assets/icons/Gender.png';

import ChangePassword from './../../containers/ChangePassword/ChangePassword';
import Alertify from '../../utilities/Aleretify/Alertify';
import axios from './../../axios';

import EditProfileFrom from './../../containers/Forms/Dating/EditProfile/EditProfileForm';


class UserProfile extends Component {

    likeHandler = () => {
        axios.post('dating/addMatch', {
            userId: this.props.profile.id 
        })
            .then(response => {
                Alertify.success(response.data.message + " " + this.props.profile.name + "!");
            });
    }

    render () {
        return (
            <CenterContainer classes={classes.CenterContainer}>
                
                <ContentContainer classes={classes.ProfileContainer}>
                    <ContentTitle>
                        {this.props.editable ? <EditProfileFrom updateprofile={this.props.updateprofile} /> : "" }
                        Profile
                    </ContentTitle>
                    

                    <ProfilePhoto 
                        src={this.props.mainProfilePhoto ? this.props.mainProfilePhoto.imageUrl : null}
                        alt="..." 
                        classname={classes.ProfilePhoto}
                        borderRadius="50%"
                    />
                
                    <ProfileName
                        style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontSize: 20
                        }}
                    >
                        {this.props.profile.name}
                    </ProfileName>
                
                    <ProfileInfo infoimage={UsernameIcon}>{this.props.profile.username}</ProfileInfo>
                    {this.props.editable ? (
                        <ProfileInfo infoimage={MailIcon}>{this.props.profile.email}</ProfileInfo>
                    ) : (
                        null
                    )}
                    <ProfileInfo infoimage={GradIcon}>{this.props.datingProfile.collegeName || "-"}</ProfileInfo>
                    <ProfileInfo infoimage={HeartIcon}>{this.props.datingProfile.relationshipStatus || "-"}</ProfileInfo>
                    <ProfileInfo infoimage={AgeIcon}>{this.props.datingProfile.age || "-"}</ProfileInfo>
                    <ProfileInfo infoimage={GenderIcon}>{this.props.datingProfile.gender || "-"}</ProfileInfo>
                    <ProfileInfo infoimage={InterestIcon}>{this.props.datingProfile.intrestedIn || "-"}</ProfileInfo>


                    <div className={classes.ProfileButtonsContainer}>
                        {this.props.editable ? (
                            <ChangePassword />
                        ) : (
                            <Fragment>
                                <Button 
                                    classes={classes.LikeButton}
                                    onClick={this.likeHandler}
                                >
                                    Like
                                </Button>  
                                <SubmitReport />
                            </Fragment>
                        )}
                    </div>

                </ContentContainer>
                <div className={classes.Rcontainer}>
                    <Tabs>
                        <div className={classes.labelContainer} label="Bio" >
                            <ContentContainer classes={classes.BioContainer}>
                                <div className={classes.SummaryContent}>
                                    {this.props.datingProfile.about || "-"}
                                </div>

                            </ContentContainer>
                        </div>
                        <div label="Interets" className={classes.labelContainer}>
                            <ContentContainer classes={classes.InterestContainer}>
                                <Tags 
                                    tags={this.props.tags} 
                                    editable={this.props.editable}
                                    deleteTagHandler={this.props.onDeleteTag}    
                                    updateprofile={this.props.updateprofile}
                                />
                            
                            </ContentContainer>
                        </div>
                        <div label="Photos" className={classes.labelContainer}>
                            <ContentContainer classes={classes.PhotosContainer}>
                                <ProfilePhotos 
                                    photos={this.props.profilePhotos} 
                                    editable={this.props.editable}
                                    addPhotoHandler={this.props.onAddPhoto}
                                    deletePhotoHandler={this.props.onDeletePhoto}
                                    setMainProfilePhotoHandler={this.props.onSetMainProfilePhoto}
                                    mainPhotoId={this.props.mainPhotoId}
                                    photoClass={classes.PhotoTabPhotos}
                                />                           
                            </ContentContainer>
                        </div>
                    </Tabs>
                 </div>
            </CenterContainer>
        );
    }

}



export default UserProfile;