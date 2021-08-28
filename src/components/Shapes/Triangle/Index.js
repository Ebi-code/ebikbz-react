import React from 'react'
import classes from "./Index.module.css";

const Triangle = props => {
    const attachClass = [classes.Triangle, props.newClass].join(" ");
    return (
        <div className={attachClass}>
            <span></span>
        </div>
    )
}

export default Triangle
