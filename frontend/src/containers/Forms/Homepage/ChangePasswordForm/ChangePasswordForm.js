import React, { Component, Fragment } from 'react';

import Form from '../../../Form/Form';
import classes from './ChangePasswordForm.css';

import { ChangePasswordFormConfig } from './../formConfigs';
import UserDetail from './../../../../utilities/UserDetail';
import Alertify from './../../../../utilities/Aleretify/Alertify';
import Spinner from '../../../../components/UI/Spinner/Spinner';

import axios from './../../../../axios';

class EditProfileForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: ChangePasswordFormConfig,
            loading: false
        }
    }

    submitHandler = formdata => {
        this.setState({
            loading: true
        });

        formdata = {
            ...formdata,
            id: UserDetail.get_userId()
        }

        axios.put('/auth/updatePassword', formdata)
            .then(response => {
                this.setState({
                    loading: false
                });

                Alertify.success(response.data.message);
            })
            .catch(err => {
                this.setState({
                    loading: false
                });
            });
    }

    render () {
        return (
            <Fragment>
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    <Form 
                        classes={classes.ChangePasswordForm}
                        headerclass={classes.Header}
                        formConfig={this.state.formConfig} 
                        formName="Change Password" 
                        url="/auth/changePassword" 
                        buttonName="Save"
                        onFormSubmit={this.submitHandler}
                    />                
                )}
            </Fragment>
        );
    }


}

export default EditProfileForm;