import React, { Component } from 'react';

import classes from './Inbox.css';
import SearchIcon from './../../../assets/icons/Search.png';
import MessageBox from './../../../containers/Dating/MessageBox/MessageBox';
import ProfileImage from './../../../components/ProfileImage/ProfileImage';
import ProfileName from './../../../components/ProfileName/ProfileName';

class Inbox extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentContact: 1 
        }
    }

    contactClickHandler = () => {
        this.setState({
            currentContact: 1
        })
    }

    render () {
        return (
            <div className={classes.Container}>
                <div className={classes.Inbox}>
                    <div className={classes.ContactsContainer}>
                        <div className={classes.ContactHeader}>
                            <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                        </div>
                        <div className={classes.SearchContainer}>
                            <img src={SearchIcon} alt="..." className={classes.SearchIcon} />
                            <input type="text" placeholder="Search or start new chat" className={classes.SearchBar} />
                        </div>

                        <div className={classes.Contacts}>
                            <div className={classes.Contact} onClick={this.contactClickHandler}>
                                <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                                <div className={classes.Info1}>
                                    <ProfileName>FirstName LastName</ProfileName>
                                    <div className={classes.LastMessage}>Hello World!</div>
                                </div>
                                {/* <div className={classes.Time}>14:45</div> */}
                            
                            </div>
                        </div>
                    </div>
                    <div className={classes.MessageBoxContainer}>
                        {!this.state.currentContact ? (
                            <div className={classes.EmptyBox}>
                                <ProfileImage style={{height: 300, width: 300}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                                <div className={classes.ProfileName}>Hi {localStorage.getItem("username")}</div>
                                <div className={classes.EmptyBoxMessage}>Please select one of the contacts to get started</div>
                            </div>
                        ) : (
                            <MessageBox />  
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Inbox;
