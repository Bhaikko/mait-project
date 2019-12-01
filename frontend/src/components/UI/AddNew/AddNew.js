import React, { Component } from 'react';

import classes from './AddNew.css';
import AddIcon from './../../../assets/icons/Add.png';

import Modal from './../Modal/Modal';

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
                    {this.props.form}
                    
                </Modal>
    
            </div>
        );
    }
}

export default AddNew;