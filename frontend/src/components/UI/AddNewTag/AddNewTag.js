import React, { Component } from 'react';

import classes from './AddNewTag.css';
import AddIcon from './../../../assets/icons/Add.png';
import EditTags from './../../../containers/Forms/Dating/EditTags/EditTags';

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
            <div className={classes.AddNewContainer}>
                <img 
                    className={classes.AddNewIcon} 
                    src={AddIcon} 
                    alt="..." 
                    onClick={this.clickHandler}
                />

                <Modal show={this.state.showForm} modalClosed={this.closeForm} classes={classes.Modal}>
                    <EditTags 
                        closeModal={this.closeForm} 
                        updateprofile={this.props.updateprofile} 
                        tags={this.props.tags}
                    />
                    
                </Modal>
    
            </div>
        );
    }
}

export default AddNew;