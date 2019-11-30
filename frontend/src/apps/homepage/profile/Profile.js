import React, { Component, Fragment } from 'react';

import UserProfile from './../../../containers/UserProfile/UserProfile';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import Layout from './../../../containers/Layout/Layout';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount () {
        
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
                <UserProfile />
            </Layout>
        );
    }
}

export default Profile;