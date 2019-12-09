import React, { Component } from 'react';

import Form from '../../../Form/Form';
import classes from './EditProfileForm.css';
import axios from '../../../../axios';

import UserDetail from '../../../../utilities/UserDetail';

class EditProfileForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            formConfig: {
                about: {
                    label: "Enter Your Bio",
                    elementType: "textarea",
                    elementConfig: {
                        placeholder: "Your Bio",
                    },
                    value: "",
                    valid: true,
                    touched: false
                },
                relationshipStatus: {
                    label: "Your Relationship Status",
                    elementType: "select",
                    elementConfig: {
                        options: [
                            "Single",
                            "Taken"
                        ]
                    },
                    value: "Single",
                    valid: true,
                    touched: false 
                },
                intrestedIn: {
                    label: "Your Interest",
                    elementType: "select",
                    elementConfig: {
                        options: [
                            "Men",
                            "Women"
                        ]
                    },
                    value: "Men",
                    valid: true,
                    touched: false 
                },
                collegeName: {
                    label: "Your College",
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Your College Name"
                    },
                    value: "",
                    valid: true,
                    touched: false 
                },
                age: {
                    label: "Your Age",
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Your Age",
                        type: "number"
                    },
                    validation: {
                        min: 18
                    },
                    value: 18,
                    valid: true,
                    touched: false 
                }
            }
        }

        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get('/dating/datingprofile/' + UserDetail.get_userId())
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        formConfig: {
                            about: {
                                ...this.state.formConfig.about,
                                value: response.data.about
                            },
                            relationshipStatus: {
                                ...this.state.formConfig.relationshipStatus,
                                value: response.data.relationshipStatus
                            },
                            intrestedIn: {
                                ...this.state.formConfig.intrestedIn ,
                                value: response.data.intrestedIn
                            },
                            collegeName: {
                                ...this.state.formConfig.collegeName,
                                value: response.data.collegeName
                            },
                            age: {
                                ...this.state.formConfig.age,
                                value: response.data.age
                            }
                        },
                        loading: false
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
        
    }

    render () {
        return (
            <React.Fragment>
                {this.state.loading ? 
                    null : 
                    <Form 
                        classes={classes.EditProfileForm}
                        headerclass={classes.Header}
                        formConfig={this.state.formConfig} 
                        formName="Update Profile" 
                        url="/dating/updateDatingProfile" 
                        buttonName="Save"
                    />
                }
            </React.Fragment>
                
        );
    }

     componentWillUnmount() {
        this._isMounted = false;
    }
}

export default EditProfileForm;