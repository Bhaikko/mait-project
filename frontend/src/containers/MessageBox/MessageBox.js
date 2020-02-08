import React, { Component } from 'react';

import classes from './MessageBox.css';

import ProfilePhoto from './../../components/ProfilePhotos/ProfilePhoto/ProfilePhoto';
import ProfileName from '../../components/ProfileName/ProfileName';
import SendIcon from './../../assets/icons/Send.png';

import UserDetail from './../../utilities/UserDetail';

class MessageBox extends Component {
    constructor (props) {
        super (props);
        this.state = {
            loading: true,
            message: ""
        }

        this.socket = this.props.socket;
    }

    componentDidMount() {
        // fetch messages
    }


    messageHandler = event => {
        this.setState({
            message: event.target.value
        });
    }

    sendMessage = () => {

        this.socket.emit('sendMessage', {
            senderId: UserDetail.get_userId(),
            recieverId: this.props.currentContact.id,
            message: this.state.message
        });

        this.setState({
            message: ""
        });
    }

    render () {
        const userId = UserDetail.get_userId() + "";
        return (
            <div className={classes.MessageBox}>
                <div className={classes.Header}>
                    <ProfilePhoto 
                        src={this.props.currentContact.profileImage}
                        alt="..." 
                        style={{
                            height: 50,
                            width: 50
                        }}
                        borderRadius="50%"    
                    />
                    <div className={classes.Status}>
                        <ProfileName>{this.props.currentContact.name}</ProfileName>
                        <div>Lastseen: {new Date().toDateString()}</div>
                    </div>
                </div>

                <div className={classes.MessagesBox}>
                    {this.props.messages.map(message => (
                        <div className={classes.Message} key={message.id}>
                            <div className={message.senderId === userId ? classes.MyMessage : classes.OtherMessage}>
                                <span className={classes.MessageContent}>{message.message}</span>   
                                <span className={classes.MessageTimestamp}>
                                    {new Date(message.time).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </span>
                            </div>
                                    
                        </div>
                    ))}
                </div>

                <div className={classes.SendContainer}>
                    <input placeholder="Type A Message" value={this.state.message} className={classes.SendInput} onChange={this.messageHandler}/>
                    <img src={SendIcon} alt="..." className={classes.SendIcon} onClick={this.sendMessage}/>
                </div>
            </div>
        );
    }
}

export default MessageBox;