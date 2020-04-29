import React, { Component, Fragment } from 'react';

import classes from './DeleteAccount.css';

import Button from './../../components/UI/Button/Button';
import Modal from './../../components/UI/Modal/Modal';
// import DeleteAccountForm from '../Forms/Homepage/DeleteAccountForm/DeleteAccountForm';

class AddNew extends Component {
    state = {
        showForm: false
    }

    clickHandler = () => {
        this.setState({
            showForm: true
        });
    }
    clickHandlerModal = () => {

    }

    closeForm = () => {
        this.setState({
            showForm: false
        });
    }

    render () {
        return (
           <Fragment>
               <Button classes={classes.DeleteAccountButton} onClick={this.clickHandler}>
                    Delete Account
                </Button>
                <Modal show={this.state.showForm} modalClosed={this.closeForm}>
                    {/* <DeleteAccountForm /> */}
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