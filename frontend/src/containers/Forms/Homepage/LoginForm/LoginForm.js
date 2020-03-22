import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Form from '../../../Form/Form';
import classes from './LoginForm.css';
import Button from '../../../../components/UI/Button/Button';

import axios from './../../../../axios';

import Modal from './../../../../components/UI/Modal/Modal';
import Spinner from './../../../../components/UI/Spinner/Spinner';
import Alertify from './../../../../utilities/Aleretify/Alertify';

import { LoginFormConfig, ForgetPasswordFormConfig } from './../formConfigs';

import { setToken } from './../../../../store/actions/index';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: LoginFormConfig,
            forgotPasswordConfig: ForgetPasswordFormConfig,
            showForgotPasswordModal: false,
            loginLoading: false,
            forgetLoading: false
        }
    }

    forgotPasswordHandler = (event) => {
        event.preventDefault();
        this.setState({
            showForgotPasswordModal: true
        });
    }

    closeModal = () => {
        this.setState({
            showForgotPasswordModal: false
        });
    }

    forgetPasswordSubmitHandler = formdata => {
        this.setState({
            forgetLoading: true
        });
        
        formdata.username = formdata.username.toLowerCase();
        axios.post('/auth/forgotPassword', formdata)
            .then(response => {
                this.setState({
                    forgetLoading: false
                });

                Alertify.success(response.data.message);
            })
            .catch(response => {
                this.setState({
                    forgetLoading: false
                });
            });
    }

    loginSubmitHandler = formdata => {
        this.setState({
            loginLoading: true
        });

        axios.post("/auth/login", formdata)
            .then(response => {
                this.setState({
                    loginLoading: false
                });

                localStorage.setItem("userdata", JSON.stringify({
                    token: response.data.token
                }));
                
                this.props.onSetToken(response.data.token);
            
                Alertify.success("Login Successful.");
            })
            .catch(err => {
                this.setState({
                    loginLoading: false
                });
            });
        
    }

    render () {
        return (
            <Fragment>
                <div className={classes.Header}>
                    Hello Friend
                </div>
                <Form 
                    classes={classes.LoginForm}
                    formConfig={this.state.formConfig} 
                    formName="Login" 
                    buttonName="Login"
                    onFormSubmit={this.loginSubmitHandler}
                >
                    <Button 
                        classes={classes.ForgotPassword} 
                        onClick={this.forgotPasswordHandler}
                    >
                        Forgot Password
                    </Button>
                </Form>

                <Modal show={this.state.showForgotPasswordModal} modalClosed={this.closeModal}>
                    {this.state.forgetLoading ? (
                        <Spinner />
                    ) : (
                        <Form
                            formConfig={this.state.forgotPasswordConfig}
                            formName="Forgot Password"
                            buttonName="Request Password"
                            classes={classes.ForgotPasswordForm}
                            headerclass={classes.ForgotPasswordHeader}
                            onFormSubmit={this.forgetPasswordSubmitHandler}
                        />
                    )}
                </Modal>

            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetToken: token => dispatch(setToken(token))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);