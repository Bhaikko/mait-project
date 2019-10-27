import React, { Component } from 'react';

import classes from './homepage.css';
import Logo from './../../components/Logo/Logo';
import Infos from './../../components/Homepage/Infos/Infos';
import HomepageCard from './../../components/Homepage/HomepageCard/HomepageCard';

class Homepage extends Component {
    render () {
        return (
            <div className={classes.Homepage}>
                <div className={classes.CardsContainer}>
                    <HomepageCard style={{ backgroundColor: "#9D354B"}} >
                        <Logo />
                        <Infos />
                    </HomepageCard>
                    <HomepageCard style={{ backgroundColor: "#2D4571"}} >
                        <Logo />
                        <Infos />
                    </HomepageCard>
                    <HomepageCard style={{ backgroundColor: "#2D4571"}} >
                        <Logo />
                        <Infos />
                    </HomepageCard>
                    <HomepageCard style={{ backgroundColor: "#9D354B"}} >
                        <Logo />
                        <Infos />
                    </HomepageCard>
                </div>
            </div>
        );
    }
}

export default Homepage;