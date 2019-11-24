import React, { Component, Fragment } from 'react';

// import classes from './Me.css';

import Layout from './../../../containers/Layout/Layout';
import NavigationItem from './../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import UserProfile from './../../../containers/UserProfile/UserProfile';

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
                }
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
                {
                    id: 4,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: false
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
                <UserProfile editable/>
            </Layout>
        );
    }
}

export default Me;