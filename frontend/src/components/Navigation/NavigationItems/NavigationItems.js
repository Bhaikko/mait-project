import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {

    render () {
        let navigationItems;
        switch (this.props.app) {
            case "home":
                navigationItems = (
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/">About</NavigationItem>
                        <NavigationItem link="/login">Login</NavigationItem>
                        <NavigationItem link="/signup">Sign Up</NavigationItem>
                    </ul>
                );
                break;
            
            case "dating":
                navigationItems = (
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/dating/explore">Explore</NavigationItem>
                        <NavigationItem link="/dating/inbox">Inbox</NavigationItem>
                        <NavigationItem link="/profile">Profile</NavigationItem>
                        <NavigationItem link="/logout">Logout</NavigationItem>
                    </ul>
                );
                break;

            default: 
                navigationItems = (
                    <ul className={classes.NavigationItems}>
                        <NavigationItem link="/">About</NavigationItem>
                        <NavigationItem link="/login">Login</NavigationItem>
                    </ul>
                );
                break;
        }

        return (
            <Fragment>
                {navigationItems}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.app.app 
    }
}

export default connect(mapStateToProps, null)(NavigationItems);