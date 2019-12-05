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

class UserProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            photos: [
                {
                    id: 1,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: false
                },
                {
                    id: 2,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: false
                },
                // {
                //     id: 3,
                //     imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                //     main: true
                // },
                // {
                //     id: 4,
                //     imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                //     main: false
                // },
            ],
        }
    }

    componentDidMount () {
        this.props.onGetTags();
        this.props.onGetPhotos();
    }


    render () {
        return (
            <Fragment>
                <CenterContainer style={{
                    paddingBottom: 30
                }}>
                    <ContentContainer classes={classes.ProfileContainer}>
                        <ContentTitle editable={this.props.editable} form={<EditProfileForm />}>Profile</ContentTitle>
                        <ProfileImage 
                            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                            alt="..." 
                            classname={classes.ProfileImage}
                            borderRadius="50%"
                        />
                    
                        <ProfileName
                            style={{
                                textAlign: "center",
                                marginTop: 10,
                                fontSize: 20
                            }}
                        >
                            {JSON.parse(localStorage.getItem("userdata")).username}
                        </ProfileName>
                    
                        {this.props.editable ? (
                            <Fragment>
                                <ProfileInfo infoimage={UsernameIcon}>{JSON.parse(localStorage.getItem("userdata")).username}</ProfileInfo>
                                <ProfileInfo infoimage={MailIcon}>example@gmail.com</ProfileInfo>

                            </Fragment>
                        ) : (
                            null
                        )}
                        <ProfileInfo infoimage={GradIcon}>Maharaja Agrasen Institute of Technology</ProfileInfo>
                        <ProfileInfo infoimage={HeartIcon}>Single</ProfileInfo>
                        <ProfileInfo infoimage={AgeIcon}>18</ProfileInfo>
                        <ProfileInfo infoimage={InterestIcon}>Men</ProfileInfo>

                    </ContentContainer>
                    <div className={classes.Rcontainer}>                        
                        <ContentContainer classes={classes.BioContainer}>
                            <ContentTitle >Bio</ContentTitle>
                            <div className={classes.SummaryContent}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
                            <ProfilePhotos 
                                photos={this.props.photos} 
                                editable={this.props.editable}
                                addPhotoHandler={this.props.onAddPhoto}
                            />
                            
                        </ContentContainer>
                        
                    </div>
                </CenterContainer>
                
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        loading: state.dating.loading,
        tags: state.dating.tags,
        photos: state.dating.photos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTags: userid => dispatch(actions.getTags(userid)),
        onDeleteTag: tag => dispatch(actions.deleteTag(tag)),
        onAddPhoto: photo => dispatch(actions.addProfilePhoto(photo)),
        onGetPhotos: userid => dispatch(actions.getProfilePhotos(userid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);