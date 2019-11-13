import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Layout.css';

import Button from './../../../../components/UI/Button/Button';

class MobileLayout extends Component {
    constructor (props) {
        super(props);

        this.state = {
            profileLink: "asd"
        }
    }

    render () {
        const newButtonStyles = {
            fontSize: "25px",
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            position: "fixed",
            bottom: "3%",
            padding: 0
        }
        return (
            <div className={classes.MobileLayout}>
                <div className={classes.Dating}>
                    <div className={classes.ImageContainer}>
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                    </div>
                    <div className={classes.MainMobile}>
                        <span className={classes.Name}>Manu, </span>
                        <span className={classes.Age}>20</span> <br />
                        <span className={classes.CollegeName}>Maharaja Agrasen Institute of Technology</span>
                        <span className={classes.Matchbox}>86%</span>
                    </div>
                    <Link to={this.state.profileLink} className={classes.ViewProfile}>View Profile </Link>
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
                        <div className={classes.SelfSummaryBoxContent}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <hr />
                    <div className={classes.TagsContainer}>
                        <div className={classes.TagHeading}>Here's what you too have in common</div>
                        <div className={classes.Tags}>
                            <div className={classes.Tag}>Tag 1</div>
                            <div className={classes.Tag}>Tag 2</div>
                            <div className={classes.Tag}>Tag 3</div>
                            <div className={classes.Tag}>Tag 4</div>
                            <div className={classes.Tag}>Tag 5</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileLayout;