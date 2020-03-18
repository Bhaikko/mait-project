import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from './homepage';
import ProfilePage from './profile/Profile';
import MePage from './Me/Me';
import AuthPage from './auth/Auth';
import LogoutPage from './../../containers/Logout/Logout';
import NotFoundPage from './NotFound/NotFound';


class HomepageRoute extends Component {
    render () {
        return (
            <Switch>
                <Route path="/auth" component={AuthPage} />
                <Route path="/me" component={MePage} />
                <Route path="/notfound" component={NotFoundPage} />
                <Route path="/profile/:id" exact component={ProfilePage} />
                <Route path="/logout" component={LogoutPage} />
                <Route path="/" exact component={Homepage} />
                <Redirect to="/notfound" />
            </Switch>
        );
    }
}

export default HomepageRoute;
