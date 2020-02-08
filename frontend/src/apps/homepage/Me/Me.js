import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Layout from './../../../containers/Layout/Layout';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import UserProfile from './../../../containers/UserProfile/UserProfile';

import * as actions from './../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Me extends Component {

    componentDidMount () {
        this.props.onGetProfile();
    }

    render () {
        let navigationItems = (
            <Fragment>
                <NavigationItem link="/dating">Explore</NavigationItem>
                <NavigationItem link="/dating/inbox">Inbox</NavigationItem>
                <NavigationItem link="/me">Profile</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </Fragment>
        );
        

        return (
            <Layout navigationItems={navigationItems}>
                {this.props.loading || !this.props.mainProfilePhoto ? (
                    <Spinner />
                ) : (
                    <UserProfile
                        profile={this.props.profile}
                        datingProfile={this.props.datingProfile}
                        tags={this.props.tags}
                        mainProfilePhoto={this.props.mainProfilePhoto}
                        profilePhotos={this.props.profilePhotos}
                        editable

                        loading={this.props.loading}
                        onAddPhoto={this.props.onAddPhoto}
                        onDeletePhoto={this.props.onDeletePhoto}
                        onSetMainProfilePhoto={this.props.onSetMainProfilePhoto}
                        onDeleteTag={this.props.onDeleteTag}  
                        mainPhotoId={this.props.mainProfilePhoto.id}
                    />
                )}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.dating.loading,
        profile: state.dating.profile,
        mainProfilePhoto: state.dating.mainProfilePhoto,
        datingProfile: state.dating.datingProfile,
        tags: state.dating.tags,
        profilePhotos: state.dating.profilePhotos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetProfile: () => dispatch(actions.getProfile()),
        onDeleteTag: tag => dispatch(actions.deleteTag(tag)),
        onAddPhoto: photo => dispatch(actions.addProfilePhoto(photo)),
        onDeletePhoto: photo => dispatch(actions.deleteProfilePhoto(photo)),
        onSetMainProfilePhoto: photo => dispatch(actions.setMainProfilePhoto(photo)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Me);