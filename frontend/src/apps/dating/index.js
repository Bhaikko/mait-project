import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dating from './Dating';
import Inbox from './Inbox/Inbox';
import Layout from './../../containers/Layout/Layout';
import NavigationItem from './../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';


class DatingRoute extends Component {

    render () {
        let navigationItems = (
            <Fragment>
                <NavigationItem link="/dating">Explore</NavigationItem>
                <NavigationItem link="/dating/inbox">Inbox</NavigationItem>
                <NavigationItem link="/me">Profile</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </Fragment>
        );
        
        let routes = (
            <Switch>
                <Route path="/dating/inbox" component={Inbox} />
                <Route path="/dating" component={Dating} />
            </Switch>
        );

        return (
            <Layout navigationItems={navigationItems}>
                {routes}
            </Layout>
        );
    }
}

export default DatingRoute;
