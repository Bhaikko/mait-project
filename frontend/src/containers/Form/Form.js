import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from './../../components/UI/Input/Input';
import Button from './../../components/UI/Button/Button';
import Spinner from './../../components/UI/Spinner/Spinner';

import * as authActions from './../../store/actions/index';

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
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if(rules.minLength) {
            isValid = value.trim().length > rules.minLength && isValid
        }

        if(rules.isPhone) {
            isValid = value.length === 10 && isValid
        }

        return isValid;
    }

    formSubmitHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        // eslint-disable-next-line
        for(let formElementIdentifier in this.state.form) {
            formData.append(formElementIdentifier, this.state.form[formElementIdentifier].value);
            // formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }

        switch (this.props.url) {
            case "/auth/login":
                this.props.onLogin(formData);
                break;

            case "/auth/signup":
                this.props.onSignUp(formData);
                break;
            
            default:
                break;
        }

        
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
                        value={formElement.config.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)} 
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched} />
                ))}
                {this.props.error ? <div>{this.props.error}</div> : null}
                <Button 
                    disabled={!this.state.formIsValid} 
                    onClick={this.formSubmitHandler} 
                    style={{
                        marginTop: 50,
                        width: 150,
                        height: 25
                    }}
                >
                    {this.props.buttonName}
                </Button>
            </form>
        );
        
        let classesArray = [classes.Form, this.props.className].join(" ");

        if (this.props.loading) {
            return (
                <Spinner />
            );
        }

        if (this.props.token) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div className={classesArray}>
                <div className={classes.FormName}>{this.props.formName}</div>
                {form}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading, 
        error: state.auth.error,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: formData => dispatch(authActions.login(formData)),
        onSignUp: formData => dispatch(authActions.signup(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
