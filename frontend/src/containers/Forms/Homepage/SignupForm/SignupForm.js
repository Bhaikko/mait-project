import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Form from '../../../Form/Form';
import classes from './SignupForm.css';

import { SignupFormConfig } from './../formConfigs';
import axios from './../../../../axios';

import Alertify from './../../../../utilities/Aleretify/Alertify';

import Spinner from './../../../../components/UI/Spinner/Spinner';

import { setToken } from './../../../../store/actions/index';

class SignUpForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: SignupFormConfig,
            loading: false
        }
    }

    sumbitHandler = formdata => {
        this.setState({
            loading: true
        });
        
        axios.post("/auth/signup", formdata)
            .then(response => {
                axios.post("/auth/login", formdata)
                    .then(response => {
                        localStorage.setItem("userdata", JSON.stringify({
                            token: response.data.token
                        }));

                        this.setState({
                            loading: false
                        });

                        this.props.onSetToken(response.data.token);

                        Alertify.success("Login Successful.");
                    });
                
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            });
    }

    render () {
        return (
            <Fragment>
                <div className={classes.Header}>
                    A New Friend!!!
                </div>
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <Form 
                        classes={classes.SignupForm}
                        FormClassName={classes.SignupFormName}
                        formConfig={this.state.formConfig} 
                        formName="Sign Up"  
                        buttonName="Sign Up Now!"
                        onFormSubmit={this.sumbitHandler}
                    />
                )}
            </Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSetToken: token => dispatch(setToken(token))
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm);