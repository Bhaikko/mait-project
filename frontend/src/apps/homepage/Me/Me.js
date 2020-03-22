import React, { Component, Fragment } from 'react';

import Layout from './../../../containers/Layout/Layout';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import UserProfile from './../../../containers/UserProfile/UserProfile';

import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from './../../../axios';
import UserDetail from '../../../utilities/UserDetail';
import Alertify from '../../../utilities/Aleretify/Alertify';

class Me extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            tags: [],
            profilePhotos: [],
            datingProfile: {},
            profile: {
                id: UserDetail.get_userId(),
                username: UserDetail.get_username(),
                name: UserDetail.get_name(),
                email: UserDetail.get_email()
            },
            mainProfilePhoto: null
        }
    }

    componentDidMount () {
        axios.get(`/dating/profile/${UserDetail.get_userId()}`)
            .then(response => {
                const mainProfilePhoto = response.data.profilePhotos.find(cPhoto => cPhoto.main === true);
                this.setState({
                    loading: false,
                    tags: response.data.userTags,
                    datingProfile: response.data.datingProfile,
                    profilePhotos: response.data.profilePhotos,
                    mainProfilePhoto: mainProfilePhoto
                });
            })
            .catch(err => {
               this.setState({
                loading: false
               });
            });
    }

    setLoading = state => {
        this.setState({
            loading: state
        });
    }

    updateProfile = (key, value, message) => {
        this.setState({
            [key]: value,
            loading: false
        });

        Alertify.success(message);
    }
    
    deleteTagHandler = tag => {
        this.setLoading(true);

        axios.delete('/dating/usertag', {
            data: {
                tag: tag 
            }
        })
            .then(response => {
                const currentTags = this.state.tags;
                const newTags = currentTags.filter(cTag => cTag.id !== tag.id);
                
                this.updateProfile("tags", newTags, response.data.message);                
            })
            .catch(() => this.setLoading(false));
    }

    addProfilePhotoHandler = photo => {
        this.setLoading(true);
        axios.post('/dating/profilephoto', photo)
            .then(response => {
                const currentPhotos = this.state.profilePhotos;
                currentPhotos.push(response.data.photo);
                this.updateProfile("profilePhotos", currentPhotos, response.data.message);
            })
            .catch(() => this.setLoading(false));
    }

    deletePhotoHandler = photo => {
        this.setLoading(true);
        axios.delete('/dating/profilephoto', {
            data: {
                photo: photo 
            }
        })
            .then(response => {
                const currentPhotos = this.state.profilePhotos;
                const newPhotos = currentPhotos.filter(cPhoto => cPhoto.id !== photo.id);
                
                if (photo.main) {
                    this.setState({
                        mainProfilePhoto: null
                    });
                }
                this.updateProfile("profilePhotos", newPhotos, response.data.message);  
            })
            .catch(() => this.setLoading(false));
    }

    setMainProfilePhoto = photo => {
        this.setLoading(true);
        axios.put('/dating/profilephoto', photo)
            .then(response => {
                const currentPhotos = this.state.profilePhotos;
                currentPhotos.map(cPhoto => {
                    if (cPhoto.id === photo.id) {
                        cPhoto.main = true;
                        this.setState({
                            mainProfilePhoto: photo
                        });
                    } else {
                        cPhoto.main = false
                    }
                    return "";
                });
                this.updateProfile("profilePhotos", currentPhotos, response.data.message);
            })
            .catch(() => this.setLoading(false));
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
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <UserProfile
                        datingProfile={this.state.datingProfile}
                        tags={this.state.tags}
                        mainProfilePhoto={this.state.mainProfilePhoto}
                        profilePhotos={this.state.profilePhotos}
                        profile={this.state.profile}
                        updateprofile={this.updateProfile}
                        editable

                        onAddPhoto={this.addProfilePhotoHandler}
                        onDeletePhoto={this.deletePhotoHandler}
                        onSetMainProfilePhoto={this.setMainProfilePhoto}

                        onDeleteTag={this.deleteTagHandler}  
                    />
                )}
            </Layout>
        );
    }
}

export default Me;