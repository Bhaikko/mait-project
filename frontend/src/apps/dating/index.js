import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './index.css';

import Dating from './Dating';
import Inbox from './Inbox/Inbox';
import Explore from './Explore/Explore';

import Layout from './../../containers/Layout/Layout';
import NavigationItem from './../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import Dropdown from './../../components/UI/Dropdown/Dropdown';

import { SERVER_URL } from './../../environments';
import socketIOClient from 'socket.io-client';
import UserDetail from './../../utilities/UserDetail';

class DatingRoute extends Component {

    constructor (props) {
        super(props);
        this.socket = socketIOClient(SERVER_URL);
        this.userId = UserDetail.get_userId();

        this.socket.emit('connectToChat', {
            userId: this.userId
        });

        window.onbeforeunload = () => {
            this.socket.emit('disconnectMe', {
                userId: this.userId
            });
        }
    }
    render () {
        let navigationItems = (
            <Fragment>
                <Dropdown dropdownButtonName="Notifications" socket={this.socket} location={this.props.location}/>
                <NavigationItem link="/dating/explore">Explore</NavigationItem>
                <NavigationItem link="/dating/inbox">Inbox</NavigationItem>
                <NavigationItem link="/me">Profile</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </Fragment>
        );
        let mobileNavigationItems=(
            <Fragment>
                <NavigationItem link="/dating/explore">Explore</NavigationItem>
                <NavigationItem link="/dating/inbox">Inbox</NavigationItem>
                <NavigationItem link="/me">Profile</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </Fragment>
        );
        
        let routes = (
            <Switch>
                <Route path="/dating/explore" component={Explore} />
                <Route path="/dating/inbox" render={props => <Inbox {...props} socket={this.socket} />}/>
                <Route path="/dating" exact component={Dating} />
                <Redirect to="/notfound" />
            </Switch>
        );

        return (
            <Layout 
                navigationItems={navigationItems} 
                mobileNavigationItems={mobileNavigationItems}
                notificationComponent={() => <Dropdown 
                    dropdownButtonName="Notifications" 
                    socket={this.socket} 
                    location={this.props.location}
                    classes={classes.DropdownButton}
                />}
            >
                {routes}
            </Layout>
        );
    }

    componentWillUnmount () {
        this.socket.emit('disconnectMe', {
            userId: this.userId
        });
    }
}


export default DatingRoute;
