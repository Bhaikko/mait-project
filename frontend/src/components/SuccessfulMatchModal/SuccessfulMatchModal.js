import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './SuccessfulMatchModal.css';
import Button from './../UI/Button/Button';
import Modal from '../UI/Modal/Modal';

const SuccessfulMatchModal = withRouter(props => {
    return (
        <Modal 
            show={props.show}
            modalClosed={props.closeModalHandler}   
            classes={classes.ModalClass} 
        >
            <h1>A Match!!!!</h1>
            <p>
                Turns Out, <br />
                Both You and <strong>{props.likeeName}</strong> Like Each Other
            </p>
            <p>
                What to do now???, <br/>
                Well You can just,
            </p>
            <div className={classes.ButtonContainer} >
                <Button
                    style={{
                        backgroundColor: "#ffbe25",
                        left: "60%",
                        borderRadius: "30px"
                    }}
                    onClick={() => {
                        props.history.push('/dating/inbox');
                    }}
                >
                    Text Them Now
                </Button>
                |
                <Button
                    style={{
                        backgroundColor: "#fa8575",
                        left: "60%",
                        borderRadius: "30px"
                    }}
                    onClick={props.closeModalHandler}
                >
                    Keep Exploring
                </Button>
            </div>

        </Modal>
    )
})

export default SuccessfulMatchModal;