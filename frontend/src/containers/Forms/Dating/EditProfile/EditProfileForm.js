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

    getProfileInfo = () => {
        axios.get('/dating/datingprofile/' + UserDetail.get_userId())
            .then(response => {
                
                const newFormConfig = EditProfileFormConfig;
                newFormConfig.about.value = response.data.about;
                newFormConfig.relationshipStatus.value = response.data.relationshipStatus;
                newFormConfig.collegeName.value = response.data.collegeName;
                newFormConfig.age.value = response.data.age;
                newFormConfig.gender.value = response.data.gender;
                newFormConfig.intrestedIn.value = response.data.intrestedIn;

                this.setState({
                    formConfig: newFormConfig,
                    loading: false
                });

            })
            .catch(err => {

            });
    }

    componentDidMount() {
        this.getProfileInfo();
    }

    updateProfile = formdata => {
        this.setState({
            loading: true,
        });
        
        axios.put('/dating/datingprofile', formdata)
            .then(response => {
                this.props.updateprofile("datingProfile", formdata, response.data.message);
                this.getProfileInfo();
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