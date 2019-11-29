import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import classes from './Explore.css';
import Button from './../../../components/UI/Button/Button';
import Tags from './../../../components/Tags/Tags';
import CenterContainer from './../../../components/UI/CenterContainer/CenterContainer';
import ContentContainer from './../../../components/UI/ContentContainer/ContentContainer';
import ProfileImage from './../../../components/ProfilePhotos/ProfileImage/ProfileImage';

class ExplorePage extends Component {

    constructor (props) {
        super(props);        

        this.state = {
            profileLink: "asd",
            tags: [
                {
                    id: 1,
                    tag: "Tag 1"
                },
                {
                    id: 2,
                    tag: "Tag 2"
                },
                {
                    id: 3,
                    tag: "Tag 3"
                },
                {
                    id: 4,
                    tag: "Tag 4"
                },
                {
                    id: 5,
                    tag: "Tag 5"
                },
            ],
            photos: [
                {
                    id: 1,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: false
                },
                {
                    id: 2,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: false
                },
                {
                    id: 3,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: true
                },
                {
                    id: 4,
                    imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    main: false
                },
            ]
        }
    }

    render () {
        
        return (
            <CenterContainer>
                <ContentContainer
                    style={{
                        marginBottom: 50,
                        marginLeft: 0
                    }}    
                >
                    <div className={classes.ProfileSection}>
                        <div className={classes.InfoContainer}>
                            <span className={classes.Name}>Manu,</span>
                            <div className={classes.AgeContainer}>
                                <span className={classes.Age}>20</span>
                                <span className={classes.CollegeName}>Maharaja Agrasen Institute of Technology</span>
                            </div>
                        </div>
                        <span className={classes.Matchbox}>86%</span>
                        <Link to={"/profile/" + this.state.profileLink} className={classes.ViewProfile}>Visit Profile</Link>
                        <Button 
                            style={{
                                backgroundColor: "#fa8575",
                                left: "30%"
                            }}
                            classes={classes.Button}
                        >
                            &#10005; <span>Pass</span>
                        </Button>
                        <Button
                            style={{
                                backgroundColor: "#ffbe25",
                                left: "60%"
                            }}
                            classes={classes.Button}
                        >
                            &#x2764; <span>Like</span>
                        </Button>
                    </div>

                    <div className={classes.DesktopPhotos}>
                        {this.state.photos.map((photo, index) => (
                            index < 4 ? (
                                <ProfileImage 
                                    src={photo.imageUrl}
                                    style={{
                                        width: 300,
                                        height: 300,
                                        margin: 10
                                    }}
                                    key={photo.id}
                                />
                            ) : null
                        ))}
                    </div>
                    <div className={classes.MainFooter}>If you like each other, we'll let you know!</div>

                    <div className={classes.MobilePhoto}>
                        <ProfileImage 
                            src={this.state.photos[0].imageUrl}
                            style={{
                                width: "60%",
                                height: "50%"
                            }}
                        />
                    
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
                            <Tags tags={this.state.tags} />
                        </div>
                    </div>
                    
                </div>

                </ContentContainer>

            </CenterContainer>

        );
    }
}

export default ExplorePage;