import React, { Component } from 'react';

import classes from './MessageBox.css';

import ProfileImage from './../../components/ProfilePhotos/ProfileImage/ProfileImage';
import ProfileName from '../../components/ProfileName/ProfileName';
import SendIcon from './../../assets/icons/Send.png'

class MessageBox extends Component {
    constructor (props) {
        super (props);
        this.state = {
            messages: [
                {
                    id: 1,
                    senderId: parseInt(JSON.parse(localStorage.getItem("userdata")).userId),
                    recieverId: 2,
                    time: new Date(),
                    message: "Hello Worldaaaaaaaaaaaaaaaaaaaaaaaaaa 1 s",
                    seen: false 
                },
                {
                    id: 2,
                    senderId: parseInt(JSON.parse(localStorage.getItem("userdata")).userId),
                    recieverId: 2,
                    time: new Date(),
                    message: "Hello World 2 ",
                    seen: false 
                },
                {
                    id: 3,
                    senderId: 2,
                    recieverId: parseInt(JSON.parse(localStorage.getItem("userdata")).userId),
                    time: new Date(),
                    message: "Hello World 3ssssssssssssssssssssssssssss ssssssssssssss ",
                    seen: false 
                },
                {
                    id: 4,
                    senderId: 2,
                    recieverId: parseInt(JSON.parse(localStorage.getItem("userdata")).userId),
                    time: new Date(),
                    message: "Hello 4 ",
                    seen: false 
                },
                {
                    id: 5,
                    senderId: parseInt(JSON.parse(localStorage.getItem("userdata")).userId),
                    recieverId: 2,
                    time: new Date(),
                    message: "Hello World Hello World 5 ",
                    seen: false 
                }
            ]
        }
    }

    render () {
        const userId = parseInt(JSON.parse(localStorage.getItem("userdata")).userId);
        return (
            <div className={classes.MessageBox}>
                <div className={classes.Header}>
                    <ProfileImage 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" 
                        alt="..." 
                        style={{
                            height: 50,
                            width: 50
                        }}
                        borderRadius="50%"    
                    />
                    <div className={classes.Status}>
                        <ProfileName>Firstname Lastname</ProfileName>
                        <div>Lastseen: {new Date().toDateString()}</div>
                    </div>
                </div>

                <div className={classes.MessagesBox}>
                    {this.state.messages.map(message => (
                        <div className={classes.Message} key={message.id}>
                            <div 
                                className={message.senderId === userId ? classes.MyMessage : classes.OtherMessage}
                            >
                                <span className={classes.MessageContent}>{message.message}</span>   
                                <span 
                                    className={classes.MessageTimestamp}
                                >
                                    {message.time.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </span>
                            </div>
                                    
                        </div>
                    ))}
                </div>

                <div className={classes.SendContainer}>
                    <input type="text" placeholder="Type A Message" className={classes.SendInput} />
                    <img src={SendIcon} alt="..." className={classes.SendIcon} />
                </div>
            </div>
        );
    }
}

export default MessageBox;