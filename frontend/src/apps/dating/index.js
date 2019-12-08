import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dating from './Dating';
import Inbox from './Inbox/Inbox';
import Explore from './Explore/Explore';


import Layout from './../../containers/Layout/Layout';
import NavigationItem from './../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';


class DatingRoute extends Component {

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
                <Route path="/dating/inbox" component={Inbox} />
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
}

export default DatingRoute;
