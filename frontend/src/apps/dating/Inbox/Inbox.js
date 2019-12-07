import React, { Component } from 'react';
import classes from './Inbox.css';
import MessageBox from './../../../containers/MessageBox/MessageBox';
import ProfileImage from './../../../components/ProfilePhotos/ProfileImage/ProfileImage';
import Contacts from './../../../components/Dating/Contacts/Contacts';
import CenterContainer from '../../../components/UI/CenterContainer/CenterContainer';
import ContentContainer from './../../../components/UI/ContentContainer/ContentContainer';
import ProfileName from '../../../components/ProfileName/ProfileName';
import FilterContainer from './../../../containers/FilterContainer/FilterContainer';

import UserDetail from './../../../utilities/UserDetail';


class Inbox extends Component {
    constructor (props) {
        super(props);

        this.myRef1 = React.createRef()

        this.state = {
            currentContact: null,
            contacts: [
                {
                    id: 1,
                    name: "Name 1",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 2,
                    name: "Name 2",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 3,
                    name: "Name 3",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 4,
                    name: "Name 4",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 5,
                    name: "Name 5",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 6,
                    name: "Name 6",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 7,
                    name: "Name 7",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                },
                {
                    id: 8,
                    name: "Name 8",
                    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX"
                }
            ],
            filteredContacts: null
        }
    }

    contactClickHandler = contactId => {
        this.setState({
            currentContact: contactId
        });
    }

    setFilterContacts = contacts => {
        this.setState({
            filteredContacts: contacts 
        });
    }
    

    render () {
        
        return (
            <CenterContainer>
                <ContentContainer classes={classes.Inbox} style={{flexDirection: "row"}}>
                    <div className={classes.ContactsContainer}>
                        <div className={classes.ProfileHeader}>
                            <ProfileImage 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" 
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
                                <ProfileImage 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" 
                                    alt="..." 
                                    style={{
                                        height: 300,
                                        width: 300
                                    }}
                                    borderRadius="50%" 
                                    classname={classes.ProfileImage}   
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
                            <MessageBox />  
                        )}
                    </div>
                </ContentContainer>
            </CenterContainer>
        );
    }
}

export default Inbox;
