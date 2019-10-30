import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
            return { showSideDrawer: !prevState.showSideDrawer };
        }); //prevState is used due to async nature of state
    }

    render () {

        return (
            //Aux Is used as HOC to wrap adjacent elements
            <Aux>
                {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
                {/* <Toolbar 
                    drawerToggleClicked={this.sideDrawerToogleHandler}
                    // isAuth={this.props.isAuthenticated} 
                /> */}
                {/* <SideDrawer 
                    // isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} 
                /> */}
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );   
    }    
}

// const mapStateToProps = (state) => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     }
// }

// export default connect(mapStateToProps)(Layout);
export default Layout;