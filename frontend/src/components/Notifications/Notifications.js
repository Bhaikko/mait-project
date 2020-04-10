import React, { Component } from 'react';

import Notification from './Notification/Notification';
import Spinner from './../UI/Spinner/Spinner';

import classes from './Notifications.css';

import axios from './../../axios';

import DefaultPhoto from './../../assets/icons/Username.png';

import { SERVER_URL } from './../../environments'

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: null
        }

        this.socket = this.props.socket;

        this.socket.on("newNotification", newNotification => {    
            const newNotifications = [...this.state.notifications, newNotification];
            this.setState({
                notifications: newNotifications
            });
            this.props.notify(true);
        });
        
        this.socket.on("newMessageNotification", newMessageNotification => {
            if (this.props.location.pathname !== '/dating/inbox') {
                const newNotifications = [...this.state.notifications, newMessageNotification];
                this.setState({
                    notifications: newNotifications
                });
                this.props.notify(true);
            }
        });
        
    }
    
    componentDidMount() {
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
                            image={notification.imageUrl ? SERVER_URL + "/" + notification.imageUrl : DefaultPhoto}
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