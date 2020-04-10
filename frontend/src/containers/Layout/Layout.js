import React, { Component, Fragment } from 'react';

import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from './../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

    constructor (props) {
        super(props);
        this.state = {
            showSideDrawer: false
        }
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => { 
            return { 
                showSideDrawer: !prevState.showSideDrawer 
            };
        });
    }

    render () {

        return (
            <Fragment>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToogleHandler}
                    navigationItems={this.props.navigationItems}   
                    notificationComponent={this.props.notificationComponent}  
                />


                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} 
                    navigationItems={this.props.mobileNavigationItems?this.props.mobileNavigationItems:this.props.navigationItems}
                />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );   
    }    
}

export default Layout;