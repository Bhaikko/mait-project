import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Inbox.css';
import MessageBox from './../../../containers/MessageBox/MessageBox';
import ProfilePhoto from './../../../components/ProfilePhotos/ProfilePhoto/ProfilePhoto';
import Contacts from './../../../components/Contacts/Contacts';
import CenterContainer from '../../../components/UI/CenterContainer/CenterContainer';
import ContentContainer from './../../../components/UI/ContentContainer/ContentContainer';
import ProfileName from '../../../components/ProfileName/ProfileName';
import FilterContainer from './../../../containers/FilterContainer/FilterContainer';
import Spinner from './../../../components/UI/Spinner/Spinner';

import UserDetail from './../../../utilities/UserDetail';

import axios from './../../../axios';

class Inbox extends Component {
    constructor (props) {
        super(props);

        this.myRef1 = React.createRef();
        this.messageBoxRef = React.createRef();

        this.state = {
            currentContact: null,
            filteredContacts: null,
            loading: true,
            messages: null,
            contacts: null
        }

        this.socket = this.props.socket;

        this.socket.on('recieveMessage', data => {
            let newMessages = null;
            if (this.state.messages) {
                newMessages = [...this.state.messages, data];
            } else {
                newMessages = [data];
            }

            if (this.state.currentContact && data.senderId === this.state.currentContact.id) {
                this.setState({
                    messages: newMessages
                }, this.scrollToBottom);
            } else {

                const currentContacts = [...this.state.contacts];
                currentContacts.map(contact => {
                    if (contact.id === data.senderId) {
                        contact.showNotification = true
                    }
                });

                this.setState({
                    contacts: currentContacts
                });
            }
        });
    }

    componentDidMount() {
        axios.get('/dating/getContacts')
            .then(response => {
                const defaultPhoto = {
                    id: 1,
                    imageUrl: "",
                    main: true
                }
                const extractedContacts = response.data.contacts;

                const notificationContacts = {};
                response.data.notifications.map(element => {
                    notificationContacts[element.senderId] = element.seen;
                });

                extractedContacts.map(contact => {
                    contact.profileImage = (contact.profilePhotos.find(photo => photo.main === true) || defaultPhoto).imageUrl;
                    contact.showNotification = notificationContacts[contact.id] === undefined ? false : true;
                    delete contact.profilePhotos;
                    return "";
                });
                this.setState({
                    contacts: extractedContacts,
                    loading: false
                });
            });
    }

    contactClickHandler = (contact, contactIndex) => {
        const newContacts = [...this.state.contacts];
        newContacts[contactIndex].showNotification = false;
        this.setState({
            currentContact: contact,
            loading: true,
            contacts: newContacts
        });

        axios.post('/messages/usermessages', {
            senderId: UserDetail.get_userId(),
            recieverId: contact.id
        })
            .then(messages => {
                this.setState({
                    messages: messages.data.messages,
                    loading: false
                });
            });
    }

    addMessageHandler = message => {
        const currentMessages = [...this.state.messages, message];
        this.setState({
            messages: currentMessages
        });
    }

    setFilterContacts = contacts => {
        this.setState({
            filteredContacts: contacts 
        });
    }

    scrollToBottom = () => {
        const element = this.messageBoxRef.current;
        element.scrollTop = element.scrollHeight;
    }
    
    render () {
        return (
            <CenterContainer>
                <ContentContainer classes={classes.Inbox} style={{flexDirection: "row"}}>
                    {this.state.loading ? (
                        <Spinner />
                    ) : (
                        <React.Fragment>
                            <div className={classes.ContactsContainer}>
                                <div className={classes.ProfileHeader}>
                                    <ProfilePhoto 
                                        src={this.props.mainProfilePhoto}
                                        alt="..." 
                                        style={{
                                            height: 50,
                                            width: 50
                                        }}
                                        borderRadius="50%"    
                                    />
                                    <ProfileName
                                        style={{
                                            marginLeft: 50
                                        }}    
                                    >
                                        {UserDetail.get_username()}
                                    </ProfileName>
                                </div>

                                <FilterContainer
                                    content={this.state.contacts}
                                    attribute={'name'}
                                    filterAssigner={this.setFilterContacts}
                                />

                                <Contacts 
                                    contacts={this.state.filteredContacts === null ? this.state.contacts : this.state.filteredContacts} 
                                    contactClickHandler={this.contactClickHandler}
                                    currentContact={this.state.currentContact}
                                    downClickHandler={() => {
                                        this.myRef1.current.classList.toggle(classes.Expand);
                                    }}
                                />
                            </div>

                            <div className={classes.MessageBoxContainer} ref={this.myRef1}>
                                {!this.state.currentContact ? (
                                    <div className={classes.EmptyBox}>
                                        <ProfilePhoto 
                                            src={this.props.mainProfilePhoto}
                                            alt="..." 
                                            style={{
                                                height: 300,
                                                width: 300
                                            }}
                                            borderRadius="50%" 
                                            classname={classes.ProfilePhoto}   
                                        />
                                        <div className={classes.ProfileName}>Hi {UserDetail.get_username()}</div>
                                        <div className={classes.EmptyBoxMessage}>
                                            Please select one of the contacts to get started.
                                            <div className={classes.ExtraEmptyBoxMessage}>
                                                Using the button on top right.
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <MessageBox 
                                        currentContact={this.state.currentContact} 
                                        socket={this.socket}
                                        messages={[...this.state.messages]}
                                        addMessageHandler={this.addMessageHandler}
                                        refProp={this.messageBoxRef}
                                        scrollToBottom={this.scrollToBottom}
                                    />  
                                )}
                            </div>
                        </React.Fragment>
                    )}
                </ContentContainer>
            </CenterContainer>
        );
    }
}

const mapStateToProps = state => {
    if (!state.dating.mainProfilePhoto) {
        return {
            mainProfilePhoto: ""
        }
    }
    return {
        mainProfilePhoto: state.dating.mainProfilePhoto.imageUrl,
    }
}

export default connect(mapStateToProps, null)(Inbox);
