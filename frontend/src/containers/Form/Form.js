import React, { Component } from 'react';

import Input from './../../components/UI/Input/Input';
import Button from './../../components/UI/Button/Button';
import Spinner from './../../components/UI/Spinner/Spinner';

import validation from './../../utilities/Validate';

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
            isValid = validation.required(value) && isValid;
        }

        if (rules.isUsername) {
            isValid = validation.isUsername(value) && isValid;
        }

        if(rules.isEmail) {
            isValid = validation.isEmail(value) && isValid;
        }

        if(rules.minLength) {
            isValid = validation.minLength(value, rules.minLength) && isValid;
        }

        if(rules.isPhone) {
            isValid = validation.isPhone(value) && isValid
        }

        if (rules.min) {
            isValid = validation.min(value, rules.min) && isValid
        }

        if (rules.isPassword) {
            isValid = validation.isPassword(value) && isValid;
        }

        return isValid;
    }

    formSubmitHandler = event => {
        event.preventDefault();
        
        const formData = {};

        // eslint-disable-next-line
        for(let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }

        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

        this.props.onFormSubmit(formData); 

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
                        tooltip={formElement.config.tooltip}
                    />
                ))}
                
                <Button 
                    classes={classes.Button}
                    disabled={!this.state.formIsValid} 
                    onClick={this.formSubmitHandler} 
                >
                    {this.props.buttonName}
                </Button>

                {this.props.children}
            </form>
        );
        
        if (this.props.loading) {
            return (
                <Spinner />
            );
        }

        return (
            <div className={[classes.Form, this.props.classes].join(" ")}>
                <div className={[classes.FormName , this.props.headerclass].join(" ")}>
                    {this.props.formName}
                </div>
                {form}
            </div>
        );
    }
}

export default Form;
