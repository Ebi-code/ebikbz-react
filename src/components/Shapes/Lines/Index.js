import React from 'react';
import classes from "./Index.module.css";

const Lines = props => {
    const attachClass = [classes.Lines, props.newClass].join(" ");
    return (
        <div className={attachClass} >
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
        </div>
    )
}

export default Lines
