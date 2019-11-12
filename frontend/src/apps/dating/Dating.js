import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './Dating.css';

import Button from './../../components/UI/Button/Button';

import HeartIcon from './../../assets/icons/Heart.png'


class Homepage extends Component {

    constructor (props) {
        super(props);

        let profileLink = "/profile/" + this.props.username;
        const buttonStyles = {
            height: "50px",
            width: "150px",
            borderRadius: "50px",
            fontSize: "25px"
        }

        this.layout = (
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
                            &#10005; Pass
                        </Button>
                        <Button
                            style={{
                                backgroundColor: "#ffbe25",
                                ...buttonStyles,
                            }}
                        >
                            &#x2764; Like
                        </Button>
                    </div>
                    <div className={classes.ImageContainer}>
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" />
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" />
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" />
                    </div>

                    <div className={classes.MainFooter}>If you like each other, we'll let you know!</div>

                </div>
                <div className={classes.AboutSection}>
                    <div className={classes.SelfSummaryBox}>
                        <div className={classes.SelfSummaryBoxHeader}>
                            My Self-Summary
                        </div>
                        <div className={classes.SelfSummaryBoxContent}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <div className={classes.AboutBox}>
                        <div className={classes.About}><span className={classes.AboutKey}>I'm Currently</span> Single</div>
                        <div className={classes.About}><span className={classes.AboutKey}>Intrested In</span> Men</div>
                        <div className={classes.About}><span className={classes.AboutKey}>Graduation From</span> Maharaja Agrasen Institute of Technology</div>
                    </div>
                </div>

            </div>
        );

        if (window.innerWidth < 768) {
            const newButtonStyles = {
                ...buttonStyles,
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                position: "fixed",
                bottom: 0,
                padding: 0
            }

            this.layout = (
                <div className={classes.MobileLayout}>
                    <div className={classes.Dating}>
                        <div className={classes.ImageContainer}>
                            <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" />
                        </div>
                        <div className={classes.MainMobile}>
                            <span className={classes.Name}>Manu, </span>
                            <span className={classes.Age}>20</span> <br />
                            <span className={classes.CollegeName}>Maharaja Agrasen Institute of Technology</span>
                            <span className={classes.Matchbox}>86%</span>
                        </div>
                        <Link to={profileLink} className={classes.ViewProfile}>View Profile </Link>
                        <hr />
                    </div>
                    <Button 
                        style={{
                            backgroundColor: "#fa8575",
                            ...newButtonStyles,
                            left: "30%"
                        }}
                    >
                        &#10005;
                    </Button>
                    <Button
                        style={{
                            backgroundColor: "#ffbe25",
                            ...newButtonStyles,
                            left: "60%"
                        }}
                    >
                        &#x2764;
                    </Button>

                    <div className={[classes.AboutSection, classes.FullWidth].join(" ")}>
                        <div className={[classes.AboutBox, classes.FullWidth].join(" ")}>
                            <div className={[classes.About, classes.FullWidth].join(" ")}><span className={[classes.AboutKey, classes.FullWidth].join(" ")}>I'm Currently</span> Single</div>
                            <div className={[classes.About, classes.FullWidth].join(" ")}><span className={[classes.AboutKey, classes.FullWidth].join(" ")}>Intrested In</span> Men</div>
                            <div className={[classes.About, classes.FullWidth].join(" ")}><span className={[classes.AboutKey, classes.FullWidth].join(" ")}>Graduation From</span> Maharaja Agrasen Institute of Technology</div>
                        </div>
                        <hr />
                        <div className={[classes.SelfSummaryBox, classes.FullWidth].join(" ")}>
                            <div className={[classes.SelfSummaryBoxHeader, classes.FullWidth].join(" ")}>
                                My Self-Summary
                            </div>
                            <div className={[classes.SelfSummaryBoxContent, classes.FullWidth].join(" ")}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                        </div>
                    </div>
                </div>
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

export default Homepage;