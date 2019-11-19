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
import EditIcon from '../../../components/UI/EditIcon/EditIcon';
import ProfileName from './../../../components/ProfileName/ProfileName';
import ProfileInfo from './../../../components/ProfileInfo/ProfileInfo';
import ProfileImage from './../../../components/ProfileImage/ProfileImage';

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

                <div className={classes.container}>
                    <div className={classes.Lcontainer}>
                        <div className={classes.profileImage}>
                            <ProfileImage 
                                src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                                alt="..." 
                                style={{
                                    "height" : "100%", 
                                    "width" : "100%"
                                }}/>
                        </div>
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


                    </div>
                    <div className={classes.Rcontainer}>
                        
                        <div className={classes.RcontainerTop}>
                            <div className={classes.fieldHeading}>Summary<EditIcon /></div>
                            
                            <div className={classes.summarycontent}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                        </div>

                        <div className={classes.RcontainerBottom}>
                            <div className={classes.fieldHeading}>Interests<EditIcon /></div>
                            <Tags tags={this.state.tags} />
                        </div>
                        <div className={classes.Rcontainerpics}>
                            <div className={classes.fieldHeading}>Photos<EditIcon /></div>
                            <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Profile " />
                            <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Profile "  />

                            <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Profile "  />
                        </div>

                    </div>
                    
                </div>
            </Layout>
        );
    }
}

export default Me;