import React, { Component } from 'react';
import shortid from 'shortid';

import classes from './MessageBox.css';

import ProfilePhoto from './../../components/ProfilePhotos/ProfilePhoto/ProfilePhoto';
import ProfileName from '../../components/ProfileName/ProfileName';
import SendIcon from './../../assets/icons/Send.png';

import UserDetail from './../../utilities/UserDetail';
import axios from './../../axios';

class MessageBox extends Component {
    constructor (props) {
        super (props);
        this.state = {
            loading: true,
            message: "",
            contactStatus: "offline"
        }
        this.messageBoxRef = React.createRef();
        this.socket = this.props.socket;
        this.userId = UserDetail.get_userId();
    }

    componentDidMount() {
        this.scrollToBottom();

        axios.post('/dating/checkonline', {
            userId: this.props.currentContact.id
        })
            .then(response => {
                this.setState({
                    contactStatus: response.data.status.lastSeen
                });
            });

        this.socket.on(`user${this.props.currentContact.id}online`, data => {
            this.setState({
                contactStatus: "Online"
            });
        });

        this.socket.on(`user${this.props.currentContact.id}offline`, data => {
            this.setState({
                contactStatus: data
            });
        });
    }

    messageHandler = event => {
        this.setState({
            message: event.target.value
        });
    }

    sendMessage = () => {
        if (this.state.message) {
            this.socket.emit('sendMessage', {
                senderId: this.userId,
                recieverId: this.props.currentContact.id,
                message: this.state.message
            });
            const newMessage = {
                id: shortid.generate(),
                message: this.state.message,
                senderId: Number(this.userId),
                recieverId: this.props.currentContact.id,
                time: new Date()
            }

            this.props.addMessageHandler(newMessage);
            this.messageId++;

            this.setState({
                message: ""
            }, this.scrollToBottom);
        }
        
    }

    scrollToBottom = () => {
        const element = this.messageBoxRef.current;
        element.scrollTop = element.scrollHeight;
    }

    render () {
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
                        {this.state.contactStatus === "Online" ? (
                            <div>Online</div>
                        ) : (
                            <div>Lastseen: {this.state.contactStatus}</div>
                        )}
                    </div>
                </div>

                <div className={classes.MessagesBox} ref={this.messageBoxRef}>
                    {this.props.messages.map(message => (
                        <div className={classes.Message} key={message.id}>
                            <div className={Number(message.senderId) === this.userId ? classes.MyMessage : classes.OtherMessage}>
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