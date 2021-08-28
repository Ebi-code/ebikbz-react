import React, { useState } from 'react';
import SectionContainer from '../../hoc/SectionContainer/SectionContainer';
import SingleRow from '../../hoc/SingleRow/SingleRow';
import Input from "../../components/Input/Input";
import Button from "../../components/UI/Button/Button"
import { updateObject, checkVilidity } from "../../shared/utility";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import classes from './Contact.module.css';

const Contact = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [formFields, setFormFields] = useState({
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "enter your email",
            },
            validation: {
                isEmail: true,
                required: true
            },
            valid: false,
            touched: false,
            value: "",
            label: "email:",
            error: "please enter valid email",
        },
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "your full name",
            },
            validation: {
                required: true
            },
            valid: false,
            touched: false,
            value: "",
            label: "name:",
            error: "please enter your full name",
        },
        message: {
            elementType: "textarea",
            elementConfig: {
                type: "textarea",
                placeholder: "type message...",
            },
            validation: {
                required: true,
                minLength: 15,
                maxLength: 500,
            },
            valid: false,
            touched: false,
            value: "",
            label: "message:",
            error: "Your message must be between 10 and 500 characters",
        },
    });

    const formElementArray = [];
    for (const key in formFields) {
        formElementArray.push({
            id: key,
            config: formFields[key]
        })
    }

    const inputChangeHandler = (event, inputIdentifeir) => {
        const updateFormElement = updateObject(formFields[inputIdentifeir], {
            value: event.target.value,
            valid: checkVilidity(event.target.value, formFields[inputIdentifeir].validation),
            touched: true
        });

        const updateFormField = updateObject(formFields, {
            [inputIdentifeir]: updateFormElement
        })

        let formIsValid = true;
        for (let inputIdentifeir in updateFormField) {
            formIsValid = updateFormField[inputIdentifeir].valid && formIsValid;
        }
        setFormIsValid(formIsValid)
        setFormFields(updateFormField);
    }

    const submitHandler = event => {
        event.preventDefault();
        let formData = {};
        let updateFormField = {};
        for (const formElementIdentifier in formFields) {
            formData[formElementIdentifier] = formFields[formElementIdentifier].value;
            const updateFormElement = updateObject(
                formFields[formElementIdentifier],
                { value: "" }
            );
            updateFormField[formElementIdentifier] = updateFormElement;
        }
        setFormFields(updateFormField)
        console.log(formData);
        return formData;
    }

    return (
        <SectionContainer newClass={classes.Contact}>
            <SingleRow>
                <div className={classes.ContactBG}>
                    <form onSubmit={submitHandler}>
                        {formElementArray.map(formElement => {
                            const config = formElement.config;
                            return (
                                <Input
                                    key={formElement.id}
                                    value={config.value}
                                    elementConfig={config.elementConfig}
                                    elementType={config.elementType}
                                    inValid={!config.valid}
                                    shouldValidate={config.validation}
                                    touched={config.touched}
                                    label={config.label}
                                    error={config.error}
                                    chenged={(event) => inputChangeHandler(event, formElement.id)}
                                />
                            )
                        })}
                        <Button clicked={submitHandler} disabled={!formIsValid}>send message</Button>
                    </form>
                    <SocialMedia />
                </div>
            </SingleRow>
        </SectionContainer>
    )
}

export default Contact
