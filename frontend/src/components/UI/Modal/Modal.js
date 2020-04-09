import React, { Component, Fragment } from 'react';
import Backdrop from './../Backdrop/Backdrop';
import classes from './Modal.css';

import CrossIcon from './../CrossIcon/CrossIcon';


class Modal extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;    
    }

    render () {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={[classes.Modal, this.props.classes].join(" ")}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)',
                        opacity: this.props.show ? '1' : '0'
                    }} 
                >
                    <CrossIcon onClick={this.props.modalClosed} classes={classes.CrossIcon}/>

                    {this.props.children}
                    
                </div>
            </Fragment>
        );
    }
}

export default Modal;