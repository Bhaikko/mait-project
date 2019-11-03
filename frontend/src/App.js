import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import AdminApp from './apps/admin/Admin';
import DatingApp from './apps/dating/index';
import FeedApp from './apps/feed/Feed';
import HomepageApp from './apps/homepage/index';
import MarketPlaceApp from './apps/marketplace/Marketplace';
import NotesApp from './apps/notes/Notes';
import AuthPage from './apps/homepage/auth/Auth';

import * as authActions from './store/actions/index';


class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = localStorage.getItem("userId");
      const username = localStorage.getItem("username");
      this.props.onAutoLogin(token, userId, username);
    }
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/admin" component={AdminApp} />
        <Route path="/dating" component={DatingApp} />
        <Route path="/feed" component={FeedApp} />
        <Route path="/marketplace" component={MarketPlaceApp} />
        <Route path="/notes" component={NotesApp} />
        <Route path="/" component={HomepageApp} />
        <Redirect to="/" />
      </Switch>
    );

    if (!this.props.token) {
      routes = (
        <Switch>
          <Route path="/" exact component={HomepageApp} />
          <Route path="/auth" component={AuthPage} />
          <Redirect to="/auth" />
        </Switch>
      );
    }

    return (
      <div>
          {routes}        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token 
  }
}

const mapDisptachToProps = dispatch => {
  return {
    onAutoLogin: (token, userId, username) => dispatch(authActions.autoLogin(token, userId, username))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(App);
