import React, { Component, Fragment } from 'react';

import Form from '../../../Form/Form';
import classes from './SignupForm.css';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                name: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Your Name",
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                username: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Your Username",
                    },
                    value: "",
                    validation: {
                        required: true,
                        isUsername: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: "input",
                    elementConfig: {
                        type: "email",
                        placeholder: "Your Email",
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
                        min: "8",
                        placeholder: "Your Password, Min 8 Characters"
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
                    A New Friend!!!
                </div>
                <Form 
                    classes={classes.SignupForm}
                    FormClassName={classes.SignupFormName}
                    formConfig={this.state.formConfig} 
                    formName="Sign Up" 
                    url="/auth/signup" 
                    buttonName="Sign Up Now!"
                />
            </Fragment>
        );
    }
}

export default LoginForm;