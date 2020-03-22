import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Layout from './../../../containers/Layout/Layout';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import UserProfile from './../../../containers/UserProfile/UserProfile';

import * as actions from './../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from './../../../axios';
import UserDetail from '../../../utilities/UserDetail';
import Alertify from '../../../utilities/Aleretify/Alertify';

class Me extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            tags: [],
            profilePhotos: [],
            datingProfile: {},
            profile: {
                id: UserDetail.get_userId(),
                username: UserDetail.get_username(),
                name: UserDetail.get_name()
            }
        }
    }

    componentDidMount () {
        axios.get(`/dating/profile/${UserDetail.get_userId()}`)
            .then(response => {
                this.setState({
                    loading: false,
                    tags: response.data.userTags,
                    datingProfile: response.data.datingProfile,
                    profilePhotos: response.data.profilePhotos
                })
            })
            .catch(err => {
               this.setState({
                loading: false
               });
            });
    }

    updateProfile = (key, value, message) => {
        console.log(key, value);
        this.setState({
            [key]: value
        });

        Alertify.success(message);
    }
    
    deleteTagHandler = tag => {
        axios.delete('/dating/usertag', {
            data: {
                tag: tag 
            }
        })
            .then(response => {
                const currentTags = this.state.tags;
                const newTags = currentTags.filter(cTag => cTag.id !== tag.id);
                
                this.updateProfile("tags", newTags, response.data.message);

            });
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
        
        const mainProfilePhoto = this.state.profilePhotos.filter(photo => photo.main);

        return (
            <Layout navigationItems={navigationItems}>
                {this.props.loading ? (
                    <Spinner />
                ) : (
                    <UserProfile
                        datingProfile={this.state.datingProfile}
                        tags={this.state.tags}
                        mainProfilePhoto={mainProfilePhoto}
                        profilePhotos={this.state.profilePhotos}
                        loading={this.state.loading}
                        profile={this.state.profile}
                        updateprofile={this.updateProfile}
                        editable

                        onAddPhoto={this.props.onAddPhoto}
                        onDeletePhoto={this.props.onDeletePhoto}
                        onSetMainProfilePhoto={this.props.onSetMainProfilePhoto}
                        onDeleteTag={this.deleteTagHandler}  
                    />
                )}
            </Layout>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddPhoto: photo => dispatch(actions.addProfilePhoto(photo)),
        onDeletePhoto: photo => dispatch(actions.deleteProfilePhoto(photo)),
        onSetMainProfilePhoto: photo => dispatch(actions.setMainProfilePhoto(photo)),
    }
}


export default connect(null, mapDispatchToProps)(Me);