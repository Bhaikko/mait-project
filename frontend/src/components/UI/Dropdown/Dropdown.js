import React, { Component, Fragment } from 'react';

import classes from './Dropdown.css';
import Notifications from './../../Notifications/Notifications';


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
                    <Notifications />
                </div>
            </Fragment>
        );
    }


};

export default Dropdown;