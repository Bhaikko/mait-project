import React, { Component } from 'react';

import classes from './EditIcon.css';

import editIcon from './../../../assets/icons/Edit.png';
import Modal from './../Modal/Modal';

class EditIcon extends Component {

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
            <React.Fragment>
                <img 
                    src={editIcon} 
                    className={classes.Icon} 
                    alt="EditIcon" 
                    onClick={this.clickHandler}
                />

                <Modal show={this.state.showForm} modalClosed={this.closeForm}>
                    {this.props.children}
                </Modal>
            </React.Fragment>
        );
    }
}

export default EditIcon;