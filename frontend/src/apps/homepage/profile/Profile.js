import React, { Component, Fragment } from 'react';

import classes from './Profile.css';

// Icons
import AgeIcon from './../../../assets/icons/Age.png';
import GradIcon from './../../../assets/icons/grad-cap.png';
import HeartIcon from './../../../assets/icons/heartgrey.png';

import Layout from './../../../containers/Layout/Layout';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import Tags from '../../../components/Tags/Tags';
import ProfileName from './../../../components/ProfileName/ProfileName';
import ProfileInfo from './../../../components/ProfileInfo/ProfileInfo';
import ProfileImage from './../../../components/ProfileImage/ProfileImage';
import CenterContainer from './../../../components/UI/CenterContainer/CenterContainer';
import ContentTitle from './../../../components/UI/ContentTitle/ContentTitle';
import ContentContainer from './../../../components/UI/ContentContainer/ContentContainer';
import ProfilePhotos from './../../../components/ProfilePhotos/ProfilePhotos';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID : null,
            tags: [
                {
                    id: 1,
                    tag: "Tag 1"
                },
                {
                    id: 2,
                    tag: "Tag 2"
                },
                {
                    id: 3,
                    tag: "Tag 3"
                },
                // {
                //     id: 4,
                //     tag: "Tag 4"
                // },
                // {
                //     id: 5,
                //     tag: "Tag 5"
                // },
            ],
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
                {
                    id: 3,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: true
                },
                // {
                //     id: 4,
                //     imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                //     main: false
                // },
            ]
        }
    }

    componentDidMount () {
        let userID = this.props.match.params.username;
        this.setState({
            userID : userID
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
                <CenterContainer>
                    <ContentContainer
                        style={{
                            width: "22%"
                        }}
                    >
                        <ContentTitle>Profile</ContentTitle>
                        <ProfileImage 
                            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                            alt="..." 
                            style={{
                                marginTop: "10px",
                                minHeight : "350px", 
                                height: "30%",
                                width : "60%",
                                borderRadius: "50%"
                            }}
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
                     
                        <ProfileInfo infoimage={GradIcon}>Maharaja Agrasen Institute of Technology</ProfileInfo>
                        <ProfileInfo infoimage={HeartIcon}>Single</ProfileInfo>
                        <ProfileInfo infoimage={AgeIcon}>18</ProfileInfo>

                    </ContentContainer>
                    <div className={classes.Rcontainer}>                        
                        <ContentContainer
                            style={{
                                width: "90%",
                                marginLeft: 10
                            }}
                        >
                            <ContentTitle>Bio</ContentTitle>
                            <div className={classes.SummaryContent}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>

                        </ContentContainer>

                        <ContentContainer
                            style={{
                                width: "90%",
                                marginLeft: 10,
                                marginTop: 10
                            }}
                        >
                            <ContentTitle>Interests</ContentTitle>
                            <Tags tags={this.state.tags} />

                        </ContentContainer>

                        <ContentContainer
                            style={{
                                width: "90%",
                                marginLeft: 10,
                                marginTop: 10,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                        >
                            <ContentTitle>Photos</ContentTitle>
                            <ProfilePhotos photos={this.state.photos} />
                            
                        </ContentContainer>
                        
                    </div>
                </CenterContainer>
            </Layout>
        );
    }
}

export default Profile;