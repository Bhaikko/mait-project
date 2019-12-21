import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './../../components/UI/Input/Input';
import Button from './../../components/UI/Button/Button';
import Spinner from './../../components/UI/Spinner/Spinner';

import * as actions from './../../store/actions/index';

import classes from './Form.css';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            form: this.props.formConfig,
            formIsValid: false,
        }
    }

    checkValidity = (value, rules) => {
        if(!rules) {
            return true;
        }

        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if(rules.isEmail) {
            // const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            // eslint-disable-next-line
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = pattern.test(value) && isValid;
        }

        if(rules.minLength) {
            isValid = value.trim().length > rules.minLength && isValid
        }

        if(rules.isPhone) {
            isValid = value.length === 10 && isValid
        }

        if (rules.min) {
            isValid = value >= rules.min && isValid
        }

        return isValid;
    }

    formSubmitHandler = event => {
        event.preventDefault();

        // const formData = new FormData();
        const formData = {};

        // eslint-disable-next-line
        for(let formElementIdentifier in this.state.form) {
            // formData.append(formElementIdentifier, this.state.form[formElementIdentifier].value);
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

        switch (this.props.url) {
            case "/auth/login":
                this.props.onLogin(formData);
                break;

            case "/auth/signup":
                this.props.onSignUp(formData);
                break;

            case "/dating/updateDatingProfile":
                this.props.onUpdateDatingProfile(formData);
                break;

            case "/auth/changePassword":
                this.props.onUpdatePassword(formData);
                break;

            case "/dating/report":
                const reportForId = window.location.href.split("/").pop();
                formData.reportForId = reportForId;
                this.props.onSubmitReport(formData);
                break;
            
            default:
                console.log("No Url Assigned for Form");
                break;
        }

        

        this.setState({
            form: this.props.formConfig,
            formIsValid: false
        });

    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedform = {
            ...this.state.form
        }

        const updatedFormElement = {
            ...updatedform[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedform[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        // eslint-disable-next-line
        for(let inputIdentifier in updatedform) {
            formIsValid = updatedform[inputIdentifier].valid && formIsValid;
        }

        if (inputIdentifier === "file") {
            this.setState({
                form: updatedform,
                formIsValid: formIsValid,
                file: event.target.files
            });
        } else {
            this.setState({
                form: updatedform,
                formIsValid: formIsValid,
            });
        }
    }

    render () {
        const formElementsArray = [];

        // eslint-disable-next-line
        for(let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        let form = (

            <form style={{height: "100%"}}>
                {formElementsArray.map(formElement => (
                    <Input 
                        label={formElement.config.label}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value || ""}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)} 
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched} 
                    />
                ))}
                
                <Button 
                    classes={classes.Button}
                    disabled={!this.state.formIsValid} 
                    onClick={this.formSubmitHandler} 
                >
                    {this.props.buttonName}
                </Button>
            </form>
        );
        
        if (this.props.loading) {
            return (
                <Spinner />
            );
        }

        return (
            <div className={[classes.Form, this.props.classes].join(" ")}>
                <div className={[classes.FormName , this.props.headerclass].join(" ")}>{this.props.formName}</div>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading, 
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: formData => dispatch(actions.login(formData)),
        onSignUp: formData => dispatch(actions.signup(formData)),
        onUpdateDatingProfile: formData => dispatch(actions.updateDatingProfile(formData)),
        onUpdatePassword: formData => dispatch(actions.updatePassword(formData)),
        onSubmitReport: formData => dispatch(actions.submitReport(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
