import React from 'react';

import classes from './Notification.css';

const Notification = props => {
    return (
        <div className={classes.Notification}>
            <img className={classes.NotificationPhoto} src={props.image} alt="..." />
            <div className={classes.NotificationContent}>
                <div className={classes.NotificationTitle}>
                    {props.title}
                </div>
                <div className={classes.NotificationMessage}>
                    {props.message}
                </div>
                <div className={classes.NotificationTime}>
                    {new Date(props.time).toLocaleString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit'
                    })}
                </div>
            </div>
        </div>
    );
}

export default Notification;