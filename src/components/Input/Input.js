import React, { useEffect, useRef } from 'react';

import classes from "./Input.module.css";

const Input = props => {
    let inputElement = null;
    let inputClasses = [classes.Input];
    const inputRef = useRef();

    if (props.inValid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    useEffect(() => {
        inputRef.current.type === "email" && inputRef.current.focus();
    }, []);

    switch (props.elementType) {
        case ("input"):
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                value={props.value}
                onChange={props.chenged}
                ref={inputRef} />
            break;
        case ("textarea"):
            inputElement = <textarea
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                value={props.value}
                onChange={props.chenged}
                ref={inputRef} />
            break;
        default:
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                value={props.value}
                onChange={props.chenged} />
            break;
    }

    return (
        <React.Fragment>
            <div className={classes.InputHolder}>
                <label className={classes.Label}>{props.label}</label>
                {inputElement}
                {props.inValid && props.shouldValidate && props.touched &&
                    <p className={classes.Error} >{props.error}</p>
                }
            </div>
        </React.Fragment>
    )
}

export default Input
