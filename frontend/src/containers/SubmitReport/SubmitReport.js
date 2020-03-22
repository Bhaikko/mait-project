import React, { Component, Fragment } from 'react';

import classes from './SubmitReport.css';

import Button from './../../components/UI/Button/Button';
import Modal from './../../components/UI/Modal/Modal';
import ReportForm from './../Forms/Dating/ReportForm/ReportForm';

class AddNew extends Component {

    state = {
        showForm: false
    }

    clickHandler = () => {
        this.setState({
            showForm: true
        });
    }

    closeForm = () => {
        this.setState({
            showForm: false
        });
    }

    render () {
        return (
           <Fragment>
               <Button classes={classes.SubmitReportButton} onClick={this.clickHandler}>
                    Submit Report
                </Button>
                <Modal show={this.state.showForm} modalClosed={this.closeForm}>
                    <ReportForm closeModal={this.closeForm}/>
                </Modal>
           </Fragment>  
        );
    }
}

export default AddNew;