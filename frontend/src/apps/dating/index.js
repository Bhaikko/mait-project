import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dating from './Dating';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';

import NavigationItem from './../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';


class DatingRoute extends Component {

    render () {
        let navigationItems = (
            <Fragment>
                <NavigationItem link="/dating/explore">Explore</NavigationItem>
                <NavigationItem link="/dating/inbox">Inbox</NavigationItem>
                <NavigationItem link="/profile">Profile</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </Fragment>
        );
        
        let routes = (
            <Switch>
                <Route path="/" component={Dating} />
            </Switch>
        );

        return (
            <div>
                <Toolbar navigationItems={navigationItems}/>
                {routes}
            </div>
        );
    }
}

export default DatingRoute;
