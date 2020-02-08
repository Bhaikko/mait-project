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

import UserDetail from './utilities/UserDetail';


class App extends Component {

  constructor (props) {
    super(props);
    const userdata = UserDetail.get_token();
    if (userdata) {      
      this.props.onAutoLogin(userdata.token, userdata.userId, userdata.username);
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
        <Redirect to="/notfound" />
      </Switch>
    );

    if (!localStorage.getItem("userdata")) {
      routes = (
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/" exact component={HomepageApp} />
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
