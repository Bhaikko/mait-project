import React, { Component, Fragment } from 'react';

import classes from './Dropdown.css';
import Notifications from './../../Notifications/Notifications';

import axios from './../../../axios';

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            notify: false
        }
    }

    hoverEventHandler = () => {
        const currentState = this.state.open;
        this.setState({
            open: !currentState
        });

        axios.delete('/dating/notifications');
        this.newNotifications(false);
    }

    newNotifications = state => {
        this.setState({
            notify: state
        });
    }

    render() {
        return (
            <Fragment>
                <div className={[classes.DropDownButton, this.state.notify === true ? classes.Notify : ""].join(" ")} onClick={this.hoverEventHandler}>
                    {this.props.dropdownButtonName}
                </div>

                <div className={[classes.DropDownContent, this.state.open ? classes.DropdownContentScroll : ""].join(" ")}>
                    <Notifications 
                        notify={this.newNotifications}
                        socket={this.props.socket}
                        location={this.props.location}
                    />
                </div>
            </Fragment>
        );
    }


};

export default Dropdown;