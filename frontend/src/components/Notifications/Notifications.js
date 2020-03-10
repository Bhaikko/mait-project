import React, { Component } from 'react';

import Notification from './Notification/Notification';
import Spinner from './../UI/Spinner/Spinner';

import classes from './Notifications.css';

import axios from './../../axios';

import DefaultPhoto from './../../assets/icons/Username.png'

const notifications = [
    {
        id: 1,
        title: "Hi Rachel",
        message: "Batmobile is waiting",
        time: new Date().toString(),
        image: "https://picsum.photos/id/24/600/600"
    },
    {
        id: 2,
        title: "Hi Rachel",
        message: "Batmobile is waiting",
        time: new Date().toString(),
        image: "https://picsum.photos/id/24/600/600"
    },
    {
        id: 3,
        title: "Hi Rachel",
        message: "Batmobile is waiting",
        time: new Date().toString(),
        image: "https://picsum.photos/id/24/600/600"
    },
    {
        id: 4,
        title: "Hi Rachel",
        message: "Batmobile is waiting",
        time: new Date().toString(),
        image: "https://picsum.photos/id/24/600/600"
    },
    {
        id: 5,
        title: "Hi Rachel",
        message: "Batmobile is waiting",
        time: new Date().toString(),
        image: "https://picsum.photos/id/24/600/600"
    },
]

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: notifications
        }
    }

    componentDidMount() {
        // fetch notifications
        axios.get('/dating/notifications')
            .then(response => {
                console.log(response.data.notifications);
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