import React, { Component, Fragment } from 'react';

import Form from '../../../Form/Form';
import classes from './LoginForm.css';
import Button from '../../../../components/UI/Button/Button';

import Modal from './../../../../components/UI/Modal/Modal';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                email: {
                    // label: "Email: ",
                    elementType: "input",
                    elementConfig: {
                        type: "email",
                        placeholder: "Enter Your Email",
                    },
                    value: "",
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    // label: "Password: ",
                    elementType: "input",
                    elementConfig: {
                        type: "password",
                        placeholder: "Enter Your Password"
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false 
                }
            },
            formIsValid: false,
            showForgotPasswordModal: false,
            forgotPasswordConfig: {
                email: {
                    // label: "Email: ",
                    elementType: "input",
                    elementConfig: {
                        type: "email",
                        placeholder: "Enter Your Email",
                    },
                    value: "",
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                username: {
                    // label: "Email: ",
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Enter Your Username",
                    },
                    value: "",
                    validation: {
                        required: true,
                        isUsername: true
                    },
                    valid: false,
                    touched: false
                },
                
            }
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
                    url="/auth/login" 
                    buttonName="Login"
                >
                    <Button 
                        classes={classes.ForgotPassword} 
                        onClick={this.forgotPasswordHandler}
                    >
                        Forgot Password
                    </Button>
                </Form>

                <Modal show={this.state.showForgotPasswordModal} modalClosed={this.closeModal}>
                    <Form
                        formConfig={this.state.forgotPasswordConfig}
                        formName="Forgot Password"
                        url="/auth/forgotPassword"
                        buttonName="Request Password"
                        classes={classes.ForgotPasswordForm}
                        headerclass={classes.ForgotPasswordHeader}
                    />
                </Modal>

            </Fragment>
        );
    }
}

export default LoginForm;