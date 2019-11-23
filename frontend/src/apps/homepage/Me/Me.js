import React, { Component, Fragment } from 'react';

import classes from './Me.css';

// Icons
import AgeIcon from './../../../assets/icons/Age.png';
import MailIcon from './../../../assets/icons/mail.png';
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

class Me extends Component {

    constructor (props) {
        super(props);
        this.state = {
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
                {
                    id: 4,
                    tag: "Tag 4"
                },
                {
                    id: 5,
                    tag: "Tag 5"
                },
            ]
        }
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
                        <ContentTitle editable>Profile</ContentTitle>
                        <ProfileImage 
                            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                            alt="..." 
                            style={{
                                marginTop: "10px",
                                height : "30%", 
                                width : "60%"
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
                     
                        <ProfileInfo infoimage={MailIcon}>example@gamil.com</ProfileInfo>
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
                            <ContentTitle editable>Bio</ContentTitle>
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
                            <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Profile " />
                            <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Profile "  />

                            <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Profile "  />
                        </ContentContainer>
                        
                    </div>
                </CenterContainer>
            </Layout>
        );
    }
}

export default Me;