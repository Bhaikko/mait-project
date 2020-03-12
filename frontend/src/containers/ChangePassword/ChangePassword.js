import React, { Component, Fragment } from 'react';

import classes from './ChangePassword.css';

import Button from './../../components/UI/Button/Button';
import Modal from './../../components/UI/Modal/Modal';
import ChangePasswordForm from '../Forms/Homepage/ChangePasswordForm/ChangePasswordForm';

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
               <Button classes={classes.ChangePasswordButton} onClick={this.clickHandler}>
                    Change Password
                </Button>
                <Modal show={this.state.showForm} modalClosed={this.closeForm}>
                    <ChangePasswordForm />
                </Modal>
           </Fragment>  
        );
    }
}

export default AddNew;