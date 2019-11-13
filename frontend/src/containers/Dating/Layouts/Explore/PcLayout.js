import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Layout.css';

import Button from '../../../../components/UI/Button/Button';

class PcLayout extends Component {
    constructor (props) {
        super(props);

        this.state = {
            profileLink: "asd"
        }
    }

    render () {
        const buttonStyles = {
            height: "50px",
            width: "150px",
            borderRadius: "50px",
            fontSize: "25px"
        }

        return (
            <div className={classes.Dating}>
                <div className={classes.Main}>
                    <div className={classes.Header}>
                        <span className={classes.Name}>Manu</span>
                        <span className={classes.Age}>20</span>
                        <span className={classes.CollegeName}>Maharaja Agrasen Institute of Technology</span>
                        <span className={classes.Matchbox}>86%</span>
                        <Link to={this.state.profileLink} className={classes.ViewProfile}>View Profile > </Link>
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
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
                        <img className={classes.Image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbRsdbiLx1MSPOr3A_mN0ttXDFqH2y9vWWg-Hant_VUBcMP2oX" alt="..." />
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
                    <div className={classes.RightSection}>
                        <div className={classes.AboutBox}>
                            <div className={classes.About}><span className={classes.AboutKey}>I'm Currently</span> Single</div>
                            <div className={classes.About}><span className={classes.AboutKey}>Intrested In</span> Men</div>
                            <div className={classes.About}><span className={classes.AboutKey}>Graduation From</span> Maharaja Agrasen Institute of Technology</div>
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

            </div>
        );
    }
}

export default PcLayout;