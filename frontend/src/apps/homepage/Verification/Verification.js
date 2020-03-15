import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Verification.css';

import CenterContainer from './../../../components/UI/CenterContainer/CenterContainer';
import ContentContainer from './../../../components/UI/ContentContainer/ContentContainer';
import ContentTitle from './../../../components/UI/ContentTitle/ContentTitle';
import Button from './../../../components/UI/Button/Button';

import axios from './../../../axios';
import Alertify from './../../../utilities/Aleretify/Alertify';
import UserDetail from './../../../utilities/UserDetail';

import * as authActions from './../../../store/actions/index';

class Verification extends Component {

    constructor(props) {
        super(props);

        this.state = {
            verificationCode: ""
        }
    }

    inputHandler = event => {
        this.setState({
            verificationCode: event.target.value 
        });
    }

    submitHandler = () => [
        axios.put('/auth/verify', {
            code: this.state.verificationCode,
            userId: UserDetail.get_userId()
        })
            .then(resposne => {
                if (resposne.status === 200) {
                    Alertify.success(`
                        You'll Now be redirected to Auth page and will be required to re-login to complete process.
                        Have Fun. :)
                    `);
    
    
                    setTimeout(() => {
                        this.props.onLogout();
                    }, 1000);
                }
            })
    ]

    render() {
        return (
            <CenterContainer classes={classes.CenterContainer}>
                <ContentContainer classes={classes.ContentContainer}>
                    <ContentTitle>Verification</ContentTitle>
                    <div className={classes.VerificationMessage}>
                        Hi There, it seems you haven't verified your E-mail yet. <br/>
                        This is mandatory to avoid spam and fake profiles on our sites. <br/>
                        We have mailed you the verification code to the E-mail you provided. <br/>
                        Submit the verification code down below to verify.
                    </div>

                    <input className={classes.VerificationInput} onChange={this.inputHandler} />

                    <Button classes={classes.SubmitButton} onClick={this.submitHandler}>Submit Verification Code.</Button>

                    <div className={classes.SmallMessage}>
                        Didn't recieve the verification code? <br />
                        Click Below to resend.
                    </div>
                    <Button classes={classes.SmallButton}>Resend Code</Button>
                    <div className={classes.SmallMessage}>
                        Still Having Problems, Mail us your issue at <br />
                        xyz@gmail.com
                    </div>
                </ContentContainer>
            </CenterContainer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Verification);