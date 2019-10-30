import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from './homepage';
import Authpage from './auth/Auth';

class HomepageRoute extends Component {
    render () {
        let routes = (
            <Switch>
                <Route path="/auth" component={Authpage} />
                <Route path="/" component={Homepage} />
            </Switch>
        )
        return (
            <div>
                {routes}
            </div>
        );
    }
}

export default HomepageRoute;
