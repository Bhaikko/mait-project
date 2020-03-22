import React, { Component } from 'react';

import Form from '../../../Form/Form';
import classes from './ReportForm.css';

import { SubmitReportFormConfig } from './../formConfigs';

import Alertify from './../../../../utilities/Aleretify/Alertify';

import axios from './../../../../axios';

class ReportForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: SubmitReportFormConfig
        }
    }

    formSubmitHandler = formdata => {
        const reportForId = window.location.href.split("/").pop();
        formdata.reportForId = reportForId;
        axios.post('/dating/report', formdata)
            .then(response => {
                Alertify.success(response.data.message);
                this.props.closeModal();
            })
            .catch(() => this.props.closeModal());    
    }

    render () {
        return (
            <Form 
                classes={classes.ReportForm}
                headerclass={classes.Header}
                formConfig={this.state.formConfig} 
                formName="Submit Report" 
                buttonName="Submit"
                onFormSubmit={this.formSubmitHandler}
            />

        );
    }

}

export default ReportForm;