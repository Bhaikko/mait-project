import React, { Component } from 'react';

import Form from '../../../Form/Form';
import classes from './ChangePasswordForm.css';


class EditProfileForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            formConfig: {
                oldPassword: {
                    label: "Enter Your Last Password",
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Last Password",
                        type: "password"
                    },
                    validation: {
                        required: true,
                        minLength: 8
                    },
                    value: "",
                    valid: false,
                    touched: false
                },
                newPassword: {
                    label: "Enter Your New Password",
                    elementType: "input",
                    elementConfig: {
                        placeholder: "New Password",
                        type: "password"
                    },
                    validation: {
                        required: true,
                        minLength: 8
                    },
                    value: "",
                    valid: false,
                    touched: false 
                },
                confirmPassword: {
                    label: "Retype Your New Password",
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Retype New Password",
                        type: "password"
                    },
                    validation: {
                        required: true,
                        minLength: 8
                    },
                    value: "",
                    valid: false,
                    touched: false 
                }
            }
        }

    }

    render () {
        return (
            <Form 
                classes={classes.ChangePasswordForm}
                headerclass={classes.Header}
                formConfig={this.state.formConfig} 
                formName="Change Password" 
                url="/auth/changePassword" 
                buttonName="Save"
            />                
        );
    }


}

export default EditProfileForm;