import React from 'react'
import classes from './Text.module.css'

const Text = props => {
    let attachedClass = [classes.Text, props.newClass].join(" ");
    return (
        <div className={attachedClass} >{props.children}</div>
    )
};

export default Text
