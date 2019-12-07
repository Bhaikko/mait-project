import React, { Component, Fragment } from 'react';

// import classes from './Me.css';

import Layout from './../../../containers/Layout/Layout';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import UserProfile from './../../../containers/UserProfile/UserProfile';

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
                <UserProfile editable/>
            </Layout>
        );
    }
}

export default Me;