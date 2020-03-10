import React, { Component } from 'react';

import Notification from './Notification/Notification';
import Spinner from './../UI/Spinner/Spinner';

import classes from './Notifications.css';

import axios from './../../axios';

import DefaultPhoto from './../../assets/icons/Username.png'


class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: null
        }
    }

    componentDidMount() {
        // fetch notifications
        axios.get('/dating/notifications')
            .then(response => {
                this.setState({
                    notifications: response.data.notifications
                });
                if (response.data.notifications.length) {
                    this.props.notify(true);
                }
            });
    }

    render() {
        return (
            <div className={classes.Notifications}>
                {this.state.notifications ? (
                    this.state.notifications.length !== 0 ? (
                        this.state.notifications.map(notification => <Notification
                            key={notification.id}
                            title={notification.title}
                            message={notification.message}
                            time={notification.time}
                            image={notification.imageUrl || DefaultPhoto}
                        />)
                    ) : (
                        <div className={classes.EmptyMessage}>So Empty :(</div>
                    )
                ) : (
                    <Spinner />
                )}
            </div>
        );
    }
}

export default Notifications;