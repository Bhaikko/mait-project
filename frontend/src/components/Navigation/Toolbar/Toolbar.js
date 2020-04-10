import React from 'react';

import classes from './Toolbar.css';
import Logo from './../../Logo/Logo';

import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />

        {props.notificationComponent ? props.notificationComponent() : ""}
        
        <Logo style={{fontSize: 20}} classes={classes.Logo}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems navigationItems={props.navigationItems} />
        </nav>
    </header>
);

export default toolbar;