import React, { Component } from 'react';

import classes from './AddNewTag.css';
import AddIcon from './../../../assets/icons/Add.png';
import EditTags from './../../../apps/dating/EditTags/EditTags';

import Modal from '../Modal/Modal';

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
            <div 
                className={classes.AddNewContainer}
                {...this.props}
            >
                <img 
                    className={classes.AddNewIcon} 
                    src={AddIcon} 
                    alt="..." 
                    onClick={this.clickHandler}
                />

                <Modal show={this.state.showForm} modalClosed={this.closeForm}>
                    <EditTags closeModal={this.closeForm} />
                    
                </Modal>
    
            </div>
        );
    }
}

export default AddNew;