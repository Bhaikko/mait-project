import React, { Component } from 'react';

import Form from '../../../Form/Form';
import classes from './ReportForm.css';


class EditProfileForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            formConfig: {
                report: {
                    label: "Report Details",
                    elementType: "textarea",
                    elementConfig: {
                        placeholder: "Report...",
                    },
                    validation: {
                        required: true
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
                classes={classes.ReportForm}
                headerclass={classes.Header}
                formConfig={this.state.formConfig} 
                formName="Submit Report" 
                url="/dating/report" 
                buttonName="Submit"
            />

        );
    }

}

export default EditProfileForm;