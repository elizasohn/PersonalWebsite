import React, { Component } from "react";
import { FormErrors } from "./FormErrors";

class Contact extends Component {
    constructor (props) {
        super(props);
        this.state = {
        name: '',
        email: '',
        message: '',
        formErrors: {
            name: '',
            email: '',
            message: '',
        },
        nameValid: false,
        emailValid: false,
        messageValid: false,
        formValid: false
        };
    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value )});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.validateField('name', this.state.name);
        this.validateField('email', this.state.email);
        this.validateField('message', this.state.message);
    }

    handleReset = (e) => {
        this.setState({
            name: '',
            email: '',
            message: '',
        });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 2;
                fieldValidationErrors.name = nameValid ? '' : 'must enter a name'
                break;
            case 'email':
                emailValid = value.length >= 2;
                fieldValidationErrors.email = emailValid ? '' : 'must enter a valid email';
                break;
            case 'message':
                messageValid = value.length >= 2;
                fieldValidationErrors.message = messageValid ? '' : 'must enter a valid message';
                break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
            nameValid: nameValid,
            emailValid: emailValid,
            messageValid: messageValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ 
            formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid 
        })
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render () {
        return (
            <div className="container">
            <form className="form" action="" onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <div className="form-control">
                        <label htmlFor='name'>Name:</label>
                        <input id="name" type="name" name="name" value={this.state.name} onChange={this.handleInput}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor='email'>Email:</label>
                        <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleInput}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" type="message" name="message" value={this.state.message} onChange={this.handleInput}></textarea>
                    </div>
                    <div className="btn">
                        <input className="btn-primary" type="submit" name="submit" value="Submit"/>
                        <input className="btn-secondary" type="reset" name="reset" value="Reset"/>
                    </div>
                </form>
                <div className="form-errors">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </div>
        )
    }
};

export default Contact;