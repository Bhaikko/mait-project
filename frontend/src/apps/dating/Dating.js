import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Dating.css';

import Button from './../../components/UI/Button/Button';

class Homepage extends Component {
    render () {
        let profileLink = "/profile/" + this.props.username;
        const buttonStyles = {
            height: "50px",
            width: "150px",
            borderRadius: "50px",
            fontSize: "20px"
        }
        return (
            <div className={classes.Dating}>
                <div className={classes.Main}>
                    <div className={classes.Header}>
                        <span className={classes.Name}>Manu</span>
                        <span className={classes.Age}>20</span>
                        <span className={classes.CollegeName}>Maharaja Agrasen Institute of Technology</span>
                        <span className={classes.Matchbox}>86%</span>
                        <Link to={profileLink} className={classes.ViewProfile}>View Profile > </Link>
                        <Button 
                            style={{
                                backgroundColor: "#fa8575",
                                ...buttonStyles
                            }}
                        >
                            X Pass
                        </Button>
                        <Button
                            style={{
                                backgroundColor: "#ffbe25",
                                ...buttonStyles
                            }}
                        >
                            * Like
                        </Button>
                    </div>
                    <div className={classes.ImageContainer}>
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" />
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" />
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;