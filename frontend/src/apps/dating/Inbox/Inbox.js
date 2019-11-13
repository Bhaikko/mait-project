import React, { Component } from 'react';

import classes from './Inbox.css';
import SearchIcon from './../../../assets/icons/Search.png'
class Inbox extends Component {
    render () {
        return (
            <div className={classes.Container}>
                <div className={classes.Inbox}>
                    <div className={classes.ContactsContainer}>
                        <div className={classes.ContactHeader}>
                            <img className={classes.ProfilePhoto} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                        </div>
                        <div className={classes.SearchContainer}>
                            <img src={SearchIcon} alt="..." className={classes.SearchIcon} />
                            <input type="text" placeholder="Search or start new chat" className={classes.SearchBar} />
                        </div>

                        <div className={classes.Contacts}>
                            <div className={classes.Contact}>
                                <img className={classes.ProfilePhoto} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                                <div className={classes.Info1}>
                                    <div className={classes.ContactName}><b>FirstName LastName</b></div>
                                    <div className={classes.LastMessage}>Hello World!</div>
                                </div>
                                <div className={classes.Time}>14:45</div>
                            
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Inbox;
