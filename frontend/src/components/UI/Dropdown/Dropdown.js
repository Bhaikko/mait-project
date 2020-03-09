import React, { Component, Fragment } from 'react';

import classes from './Dropdown.css';


class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    hoverEventHandler = () => {
        const currentState = this.state.open;
        this.setState({
            open: !currentState
        });
    }

    render() {
        return (
            <Fragment>
                <div className={classes.DropDownButton} onClick={this.hoverEventHandler}>
                    {this.props.dropdownButtonName}
                </div>

                <div className={[classes.DropDownContent, this.state.open ? classes.DropdownContentScroll : ""].join(" ")}>
                    <div className={classes.Notifications}>
                        <div className={classes.Notification}>
                            <img className={classes.NotificationPhoto} src="https://picsum.photos/id/24/600/600" alt="..." />
                            <div className={classes.NotificationContent}>
                                <div className={classes.NotificationTitle}>
                                    Hi Rachel
                                </div>
                                <div className={classes.NotificationMessage}>
                                    Batmobile is waiting at your door
                                </div>
                                <div className={classes.NotificationTime}>
                                    {new Date().toLocaleString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: '2-digit'
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }


};

export default Dropdown;