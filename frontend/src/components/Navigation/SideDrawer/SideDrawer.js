import React, { Fragment } from 'react';

import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import Backdrop from './../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open)
        attachedClasses = [classes.SideDrawer, classes.Open];
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")} onClick={props.closed} >
                <Logo style={{color: "#622870"}} />
                <nav className={classes.Navbar}>
                    <NavigationItems navigationItems={props.navigationItems} />
                </nav>
            </div>
        </Fragment>
        
    );
}

export default sideDrawer;