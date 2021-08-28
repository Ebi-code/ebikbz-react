import React from 'react'
import classes from "./Description.module.css"

const Description = props => {
    let attachedClass = [classes.Description, props.newClass].join(" ");
    return (
        <div className={attachedClass}><h2>{props.children}</h2></div>
    )
};

export default Description;
