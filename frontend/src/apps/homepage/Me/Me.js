import React, { Component,Fragment } from 'react';
import classes from './Me.css';
import ProfileImage from './../../../components/ProfileImage/ProfileImage';
import editIcon from './../../../assets/icons/edit.png';
import mailIcon from './../../../assets/icons/mail.png';
import gradIcon from './../../../assets/icons/grad-cap.png';
import greyheartIcon from './../../../assets/icons/heartgrey.png';
import Layout from './../../../containers/Layout/Layout';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';





class Me extends Component {
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
                        <ProfileImage src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="..." style={{"height" : "100%", "width" : "100%"}}/>
                    </div>
                    <div className={classes.profileName}>
                        <span>{JSON.parse(localStorage.getItem("userdata")).username}</span>
                        <img src={editIcon} className={classes.icon}/>
                    </div>
                    <div className={classes.mailcontainer}>
                        <img src={mailIcon}/>
                        <span>example@gamil.com</span>
                    </div>
                    <div className={classes.gradcontainer}>
                        <img src={gradIcon} />
                        <span>Maharja Agrasen Institute Of Technology</span>
                    </div>
                    <div className={classes.relationcontainer}>
                        <img src={greyheartIcon} />
                        <span>Single</span>
                    </div>
                </div>
                <div className={classes.Rcontainer}>
                    
                     <div className={classes.RcontainerTop}>
                        <div className={classes.fieldHeading}>Summary<img src={editIcon} className={classes.icon}/></div>
                        
                        <div className={classes.summarycontent}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                     </div>

                     <div className={classes.RcontainerBottom}>
                        <div className={classes.fieldHeading}>Interests<img src={editIcon} className={classes.icon}/></div>
                        <div className={classes.Tags}>
                            <div className={classes.Tag}>Tag 1</div>
                            <div className={classes.Tag}>Tag 2</div>
                            <div className={classes.Tag}>Tag 3</div>
                            <div className={classes.Tag}>Tag 4</div>
                            <div className={classes.Tag}>Tag 5</div>
                        </div>
                     </div>
                     <div className={classes.Rcontainerpics}>
                        <div className={classes.fieldHeading}>Photos<img src={editIcon} className={classes.icon}/></div>
                        <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

                        <img className={classes.image} src="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                     </div>

                </div>
                
            </div>
            </Layout>
        );
    }
}

export default Me;