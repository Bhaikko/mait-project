import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './UserProfile.css';

import CenterContainer from './../../components/UI/CenterContainer/CenterContainer';
import ContentContainer from './../../components/UI/ContentContainer/ContentContainer';
import ContentTitle from './../../components/UI/ContentTitle/ContentTitle';
import ProfileImage from './../../components/ProfilePhotos/ProfileImage/ProfileImage';
import ProfileInfo from './../../components/ProfileInfo/ProfileInfo';
import ProfileName from './../../components/ProfileName/ProfileName';
import Tags from './../../components/Tags/Tags';
import ProfilePhotos from './../../components/ProfilePhotos/ProfilePhotos';

import GradIcon from './../../assets/icons/grad-cap.png';
import HeartIcon from './../../assets/icons/Heart.png';
import AgeIcon from './../../assets/icons/Age.png';
import UsernameIcon from './../../assets/icons/Username.png';
import MailIcon from './../../assets/icons/mail.png';
import InterestIcon from './../../assets/icons/Interest.png';

import EditProfileForm from './../../apps/dating/EditProfile/EditProfileForm';

import * as actions from './../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

import UserDetail from './../../utilities/UserDetail';

class UserProfile extends Component {

    componentDidMount () {
        this.props.onGetDatingProfile();
        this.props.onGetTags();
        this.props.onGetPhotos();
    }


    render () {
        return (
            <Fragment>
                <CenterContainer style={{
                    paddingBottom: 30
                }}>
                    {this.props.loading ? (
                        <Spinner />
                    ) : (
                        <Fragment>

                            <ContentContainer classes={classes.ProfileContainer}>
                                <ContentTitle editable={this.props.editable} form={<EditProfileForm />}>Profile</ContentTitle>
                                
                                {this.props.loading || !this.props.mainProfilePhoto ? (
                                    <Spinner />
                                ) : (
                                    <ProfileImage 
                                        src={this.props.mainProfilePhoto.imageUrl}
                                        alt="..." 
                                        classname={classes.ProfileImage}
                                        borderRadius="50%"
                                    />
                                )}
                            
                                <ProfileName
                                    style={{
                                        textAlign: "center",
                                        marginTop: 10,
                                        fontSize: 20
                                    }}
                                >
                                    {UserDetail.get_username()}
                                </ProfileName>
                            
                                {this.props.editable ? (
                                    <Fragment>
                                        <ProfileInfo infoimage={UsernameIcon}>{UserDetail.get_username()}</ProfileInfo>
                                        <ProfileInfo infoimage={MailIcon}>{UserDetail.get_email()}</ProfileInfo>
        
                                    </Fragment>
                                ) : (
                                    null
                                )}
                                <ProfileInfo infoimage={GradIcon}>{this.props.profile.collegeName || "-"}</ProfileInfo>
                                <ProfileInfo infoimage={HeartIcon}>{this.props.profile.relationshipStatus || "-"}</ProfileInfo>
                                <ProfileInfo infoimage={AgeIcon}>{this.props.profile.age || "-"}</ProfileInfo>
                                <ProfileInfo infoimage={InterestIcon}>{this.props.profile.intrestedIn || "-"}</ProfileInfo>
        
                            </ContentContainer>
                            <div className={classes.Rcontainer}>                        
                                <ContentContainer classes={classes.BioContainer}>
                                    <ContentTitle >Bio</ContentTitle>
                                    <div className={classes.SummaryContent}>
                                        {this.props.profile.about || "-"}
                                    </div>
        
                                </ContentContainer>
        
                                <ContentContainer classes={classes.InterestContainer}>
                                    <ContentTitle>Interests</ContentTitle>
                                    {this.props.loading ? (
                                        <Spinner />
                                    ) : (
                                        <Tags 
                                            tags={this.props.tags} 
                                            editable={this.props.editable}
                                            deleteTagHandler={this.props.onDeleteTag}    
                                        />
                                    )}
        
                                </ContentContainer>
        
                                <ContentContainer classes={classes.PhotosContainer}>
                                    <ContentTitle>Photos</ContentTitle>
                                    {this.props.loading || !this.props.mainProfilePhoto ? (
                                        <Spinner />
                                    ) : (
                                        <ProfilePhotos 
                                            photos={this.props.photos} 
                                            editable={this.props.editable}
                                            addPhotoHandler={this.props.onAddPhoto}
                                            deletePhotoHandler={this.props.onDeletePhoto}
                                            setMainProfilePhotoHandler={this.props.onSetMainProfilePhoto}
                                            mainPhotoId={this.props.mainProfilePhoto.id}
                                        />
                                    )}
                                    
                                </ContentContainer>
                            </div>
                        </Fragment>
                    )}
                </CenterContainer>
                
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        loading: state.dating.loading,
        tags: state.dating.tags,
        photos: state.dating.photos,
        mainProfilePhoto: state.dating.mainProfilePhoto,
        profile: state.dating.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTags: userid => dispatch(actions.getTags(userid)),
        onDeleteTag: tag => dispatch(actions.deleteTag(tag)),
        onAddPhoto: photo => dispatch(actions.addProfilePhoto(photo)),
        onGetPhotos: userid => dispatch(actions.getProfilePhotos(userid)),
        onDeletePhoto: photo => dispatch(actions.deleteProfilePhoto(photo)),
        onSetMainProfilePhoto: photo => dispatch(actions.setMainProfilePhoto(photo)),
        onGetDatingProfile: userid => dispatch(actions.getDatingProfile(userid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);