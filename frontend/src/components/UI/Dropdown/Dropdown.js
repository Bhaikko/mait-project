import React, { Component } from 'react';

import classes from './Dropdown.css';

class Dropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    openHandler = () => {
        this.setState({
            open: true
        });
    }

    closeHandler = () => {
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <div className={[classes.Dropdown, this.props.buttonClass].join(" ")}>
                <div className={classes.DropDownButton}>
                    {this.props.dropdownButtonName}
                </div>

                {this.state.open ? (
                    <div className={classes.DropDownContent}>
                        asd
                    </div>
                ) : (
                    null
                )}
            </div>
        );
    }
};

export default Dropdown;