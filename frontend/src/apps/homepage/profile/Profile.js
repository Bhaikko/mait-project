import React, { Component, Fragment } from 'react';
import axios from './../../../axios';

import { Redirect } from 'react-router-dom';

import UserProfile from './../../../containers/UserProfile/UserProfile';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import Layout from './../../../containers/Layout/Layout';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            profileId: window.location.href.split("/").pop(),
            loading: true,
            tags: [],
            profilePhotos: [],
            mainProfilePhoto: null,
            profile: null,
            datingProfile: null,
            error: false
        }
    }

    componentDidMount () {
        axios.get('/dating/profile/' + this.state.profileId)
            .then(response => {
                const userdata = response.data;
                const defaultPhoto = {
                    id: 1,
                    imageUrl: "",
                    main: true
                }
                this.setState({
                    loading: false,
                    error: false,
                    profile: {
                        id: userdata.id,
                        name: userdata.name,
                        username: userdata.username 
                    },
                    tags: userdata.userTags || [],
                    profilePhotos: userdata.profilePhotos || [],
                    datingProfile: userdata.datingProfile || {},
                    mainProfilePhoto: userdata.profilePhotos.find(photo => photo.main === true) || defaultPhoto
                });


            })
            .catch(() => {
                this.setState({
                    loading: true,
                    error: true
                });
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

        
        return (  
            <Layout navigationItems={navigationItems}>
                {this.state.error ? <Redirect to="/notfound" /> : null}
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <UserProfile
                        profile={this.state.profile}
                        datingProfile={this.state.datingProfile}
                        tags={this.state.tags}
                        mainProfilePhoto={this.state.mainProfilePhoto}
                        profilePhotos={this.state.profilePhotos}
                        loading={this.state.loading}
                    />
                )}
            </Layout>
        );
    }
}

export default Profile;