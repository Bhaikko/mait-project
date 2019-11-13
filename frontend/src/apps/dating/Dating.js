import React, { Component, Fragment } from 'react';

import MobileLayout from './../../containers/Dating/Layouts/Explore/MobileLayout';
import PcLayout from '../../containers/Dating/Layouts/Explore/PcLayout';


class ExplorePage extends Component {

    constructor (props) {
        super(props);        

        this.layout = (
            <PcLayout />
        );

        if (window.innerWidth < 768) {
            this.layout = (
                <MobileLayout />
            );
        }
    }

    render () {
        
        return (
            <Fragment>
                {this.layout}
            </Fragment>
        );
    }
}

export default ExplorePage;