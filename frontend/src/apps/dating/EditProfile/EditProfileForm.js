import React, { Component } from 'react';

import Form from './../../../containers/Form/Form';
import classes from './EditProfileForm.css';
// import axios from './../../../axios';

class EditProfileForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                about: {
                    label: "Enter Your Bio",
                    elementType: "textarea",
                    elementConfig: {
                        placeholder: "Your Bio",
                    },
                    value: "",
                    valid: true,
                    touched: false
                },
                relationStatus: {
                    label: "Your Relationship Status",
                    elementType: "select",
                    elementConfig: {
                        options: [
                            "Single",
                            "Taken"
                        ]
                    },
                    value: "Single",
                    valid: true,
                    touched: false 
                },
                intrestedIn: {
                    label: "Your Interest",
                    elementType: "select",
                    elementConfig: {
                        options: [
                            "Men",
                            "Women",
                            "Both"
                        ]
                    },
                    value: "Men",
                    valid: true,
                    touched: false 
                },
                collegeName: {
                    label: "Your College",
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Your College Name"
                    },
                    value: "",
                    valid: true,
                    touched: false 
                },
                age: {
                    label: "Your Age",
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Your Age",
                        type: "number"
                    },
                    value: 18,
                    valid: true,
                    touched: false 
                }

            },
        }
    }

    componentDidMount() {

        
    }

    render () {
        return (
                <Form 
                    classes={classes.EditProfileForm}
                    headerclass={classes.Header}
                    formConfig={this.state.formConfig} 
                    formName="Update Profile" 
                    // url="/auth/login" 
                    buttonName="Save"
                />
        );
    }
}

export default EditProfileForm;