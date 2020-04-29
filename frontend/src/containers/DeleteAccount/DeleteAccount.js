import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import classes from './DeleteAccount.css';

import Button from './../../components/UI/Button/Button';
import Modal from './../../components/UI/Modal/Modal';

import axios from './../../axios';
import Alertify from '../../utilities/Aleretify/Alertify';


class AddNew extends Component {
    state = {
        showForm: false,
        redirect: false
    }

    clickHandler = () => {
        this.setState({
            showForm: true
        });
    }

    clickHandlerModal = () => {
        axios.delete('/dating/user')
            .then(response => {
                this.setState({
                    redirect: true
                })

                Alertify.success(response.data.message);
            });
    }

    closeForm = () => {
        this.setState({
            showForm: false
        });
    }

    render () {
        if (this.state.redirect) {
            return (
                <Redirect to="/logout" />
            );
        }
        return (
           <Fragment>
               <Button classes={classes.DeleteAccountButton} onClick={this.clickHandler}>
                    Delete Account
                </Button>
                <Modal show={this.state.showForm} modalClosed={this.closeForm}>
                    <div className={classes.heading}>
                        DELETE ACCOUNT
                    </div>
                    <div className={classes.warning}>
                        Your account will be deleted permanently. Are you sure?
                    </div>
                    <div className={classes.modalButtonContainer}>
                        <Button classes={classes.deleteAccountModalButton} onClick={this.clickHandlerModal}>Delete Account</Button>
                    </div>
                </Modal>
           </Fragment>  
        );
    }
}

export default AddNew;