import React, { Component, Fragment } from 'react';

import Form from '../../../../containers/Form/Form';
import classes from './LoginForm.css';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                email: {
                    elementType: "input",
                    elementConfig: {
                        type: "email",
                        placeholder: "Email",
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
                    elementType: "input",
                    elementConfig: {
                        type: "password",
                        placeholder: "Password"
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
                    Hello Friend.
                </div>
                <Form 
                    className={classes.LoginForm}
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