import React, { Component } from 'react';

import classes from './Inbox.css';
import SearchIcon from './../../../assets/icons/Search.png';
import MessageBox from './../../../containers/Dating/MessageBox/MessageBox';
import ProfileImage from './../../../components/ProfileImage/ProfileImage';
import Contacts from './../../../components/Dating/Contacts/Contacts';
import CenterContainer from '../../../components/UI/CenterContainer/CenterContainer';

class Inbox extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentContact: null,
            contacts: [
                {
                    id: 1,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 2,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 3,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 4,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 5,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 6,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 7,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 8,
                    name: "Firstname Lastname",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },

            ]
        }
    }

    contactClickHandler = contactId => {
        this.setState({
            currentContact: contactId
        });
    }


    render () {
        return (
            <CenterContainer>
                <div className={classes.Inbox}>
                    <div className={classes.ContactsContainer}>
                        <div className={classes.ProfileHeader}>
                            <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                            <div className={classes.ProfileName} style={{marginLeft: 50, fontSize: 30}}>{JSON.parse(localStorage.getItem("userdata")).username}</div>
                        </div>
                        <div className={classes.SearchContainer}>
                            <img src={SearchIcon} alt="..." className={classes.SearchIcon} />
                            <input type="text" placeholder="Search or start new chat" className={classes.SearchBar} />
                        </div>

                        <Contacts 
                            contacts={this.state.contacts} 
                            contactClickHandler={this.contactClickHandler}
                            currentContact={this.state.currentContact}
                        />
                    </div>

                    <div className={classes.MessageBoxContainer}>
                        {!this.state.currentContact ? (
                            <div className={classes.EmptyBox}>
                                <ProfileImage style={{height: 300, width: 300}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                                <div className={classes.ProfileName}>Hi {JSON.parse(localStorage.getItem("userdata")).username}</div>
                                <div className={classes.EmptyBoxMessage}>
                                    Please select one of the contacts to get started.
                                    <div className={classes.ExtraEmptyBoxMessage}>
                                        Using the button on top right.
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <MessageBox />  
                        )}
                    </div>
                </div>
            </CenterContainer>
        );
    }
}

export default Inbox;
