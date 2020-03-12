import React, { Component } from 'react';
import shortid from 'shortid';

import classes from './MessageBox.css';

import ProfilePhoto from './../../components/Profile/ProfilePhotos/ProfilePhoto/ProfilePhoto';
import ProfileName from '../../components/Profile/ProfileName/ProfileName';
import SendIcon from './../../assets/icons/Send.png';

import UserDetail from './../../utilities/UserDetail';
import axios from './../../axios';

import Message from './Message/Message';

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
        this.userName = UserDetail.get_username();
    }

    componentDidMount() {
        this.props.scrollToBottom();

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
                contactStatus: data.time
            });
        });
    }
    ehandler = (e) => {
        if (e.key === 'Enter') {
          this.sendMessage();
        }
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
            }, this.props.scrollToBottom);
        }
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

                <div className={classes.MessagesBox} ref={this.props.refProp}>
                    {this.props.messages.map(message => (
                        <Message 
                            message={message} 
                            userId={this.userId}
                            key={message.id}    
                            contactName={this.props.currentContact.name}
                            username={this.userName}
                        />
                    ))}
                </div>
                <div className={classes.SendContainer}>
                    <input 
                        placeholder="Type A Message..." 
                        value={this.state.message} 
                        className={classes.SendInput} 
                        onChange={this.messageHandler} 
                        onKeyDown={this.ehandler} 
                    />
                    <div className={classes.SendIconCont}>
                        <img 
                            src={SendIcon} 
                            alt="..." 
                            className={classes.SendIcon} 
                            onClick={this.sendMessage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageBox;