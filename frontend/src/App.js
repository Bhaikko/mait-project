import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';

import AdminApp from './apps/admin/Admin';
import DatingApp from './apps/dating/Dating';
import FeedApp from './apps/feed/Feed';
import HomepageApp from './apps/homepage/index';
import MarketPlaceApp from './apps/marketplace/Marketplace';
import NotesApp from './apps/notes/Notes';


class App extends Component {

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

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.app.app 
  }
}

export default connect(mapStateToProps)(App);
