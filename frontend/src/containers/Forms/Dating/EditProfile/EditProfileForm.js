import React, { Component } from 'react';

import Form from '../../../Form/Form';
import classes from './EditProfileForm.css';
import axios from '../../../../axios';

import UserDetail from '../../../../utilities/UserDetail';
import EditIcon from './../../../../components/UI/EditIcon/EditIcon';

import { EditProfileFormConfig } from './../formConfigs';

class EditProfileForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            formConfig: EditProfileFormConfig 
        }
    }

    componentDidMount() {
        axios.get('/dating/datingprofile/' + UserDetail.get_userId())
            .then(response => {
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
                        },
                        gender: {
                            ...this.state.formConfig.gender,
                            value: response.data.gender
                        }
                    },
                    loading: false
                });
            
            })
            .catch(err => {

            });
    }

    updateProfile = formdata => {
        this.setState({
            loading: true,
        });
        axios.put('/dating/datingprofile', formdata)
            .then(response => {
                this.props.updateprofile("datingProfile", formdata, response.data.message);
                this.setState({
                    loading: false
                });
            })
            .catch(() => this.setState({loading: false}));
    }

    render () {
        return (
            <React.Fragment>
                {this.state.loading ? 
                    null : 
                    <EditIcon>
                        <Form 
                            classes={classes.EditProfileForm}
                            headerclass={classes.Header}
                            formConfig={this.state.formConfig} 
                            formName="Update Profile" 
                            buttonName="Save"
                            onFormSubmit={this.updateProfile}
                        />
                    </EditIcon>
                }
            </React.Fragment>
                
        );
    }
}

export default EditProfileForm;