import React, { Component, Fragment } from 'react';

import classes from './Dropdown.css';
import Notifications from './../../Notifications/Notifications';

import axios from './../../../axios';

import Alertify from './../../../utilities/Aleretify/Alertify';
import notifIcon from './../../../assets/icons/notif.png';

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
        if (this.state.notify !== state && state === true) {
            Alertify.success('A New Notification');
        }
        this.setState({
            notify: state
        });
    }

    render() {
        return (
            <Fragment>
                <div className={[classes.DropDownButton, this.props.classes, this.state.notify === true ? classes.Notify : ""].join(" ")} onClick={this.hoverEventHandler}>
                    {/* {this.props.dropdownButtonName} */}
                    <img src={notifIcon} alt={this.props.dropdownButtonName} className={classes.notifIcon}/>
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