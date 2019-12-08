import React, { Component, Fragment } from 'react';

import Form from '../../../Form/Form';
import classes from './LoginForm.css';

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
                        required: true,
                        minLength: 8 
                    },
                    valid: false,
                    touched: false 
                },

            },
            formIsValid: false
        }
    }

    render () {
        return (
            <Fragment>
                <div className={classes.Header}>
                    Hello Friend
                </div>
                <Form 
                    className={classes.LoginForm}
                    FormClassName={classes.LoginFormName}
                    formConfig={this.state.formConfig} 
                    formName="Login" 
                    url="/auth/login" 
                    buttonName="Login"
                />
            </Fragment>
        );
    }
}

export default LoginForm;