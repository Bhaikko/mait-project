import React from 'react';

import classes from './Message.css';

const Message = props => {

    const checkUser = () => {
        return Number(props.message.senderId) === props.userId;
    }

    return (
        <div className={classes.Message} key={props.message.id}>
            <div className={[classes.MessageInfo, checkUser() ? classes.OtherMessageInfo : ""].join(" ")}>
                <div className={classes.MessageName}>{checkUser() ? props.username : props.contactName}</div>
                <div className={classes.MessageTime}>
                    {new Date(props.message.time).toLocaleString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit'
                    })}
                </div>
            </div>
            <div className={checkUser() ? classes.MyArrow : classes.OtherArrow}></div>
            <div className={checkUser() ? classes.MyMessage : classes.OtherMessage}>
                <span className={classes.MessageContent}>{props.message.message}</span>   
            </div>           
        </div>
    );
}

export default Message;