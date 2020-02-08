import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dating from './Dating';
import Inbox from './Inbox/Inbox';
import Explore from './Explore/Explore';
import * as actions from './../../store/actions/index';

import Layout from './../../containers/Layout/Layout';
import NavigationItem from './../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';

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
    }

    componentDidMount () {
        this.props.onGetProfile();
    }

    render () {
        let navigationItems = (
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
                {/* <Route path="/dating/inbox" component={Inbox} socket={this.socket}/> */}
                <Route path="/dating/inbox" render={props => <Inbox {...props} socket={this.socket} />}/>
                <Route path="/dating" exact component={Dating} />
                <Redirect to="/notfound" />
            </Switch>
        );

        return (
            <Layout navigationItems={navigationItems}>
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

const mapDispatchToProps = dispatch => {
    return {
        onGetProfile: () => dispatch(actions.getProfile())
    }
}

export default connect(null, mapDispatchToProps)(DatingRoute);
