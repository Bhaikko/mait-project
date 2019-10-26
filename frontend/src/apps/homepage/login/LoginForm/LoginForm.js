import React, { Component } from 'react';

import Form from '../../../../containers/Form/Form';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                username: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Username",
                    },
                    value: "",
                    validation: {
                        required: true
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
                        required: true 
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
            <Form 
                formConfig={this.state.formConfig} 
                formName="Login" 
                url="/auth/login" 
                buttonName="Login"
            />
        );
    }
}

export default LoginForm;