import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as authActions from './../../store/actions/index';

class Logout extends Component {
    constructor (props) {
        super (props);
        this.props.onLogout();
    }

    render () {
        return (
            <Redirect to="/" />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);