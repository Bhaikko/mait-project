import React, { Component, Fragment } from 'react';

import Form from './../../../containers/Form/Form';
import classes from './EditProfileForm.css';

class EditProfileForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                about: {
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Your Bio",
                    },
                    value: "",
                    validation: {

                    },
                    valid: false,
                    touched: false
                },
                relationStatus: {
                    elementType: "select",
                    elementConfig: {
                        options: [
                            "Single",
                            "Taken"
                        ]
                    },
                    value: "Single",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false 
                }

            },
            formIsValid: false
        }
    }

    render () {
        return (
            <Fragment>
                <div className={classes.Header}>
                    Edit Profile
                </div>
                <Form 
                    classes={classes.EditProfile}
                    FormNameClass={classes.EditProfileName}
                    formConfig={this.state.formConfig} 
                    // formName="Login" 
                    // url="/auth/login" 
                    // buttonName="Login"
                />
            </Fragment>
        );
    }
}

export default EditProfileForm;