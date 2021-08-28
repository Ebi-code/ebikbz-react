import React from 'react'
import classes from './Index.module.css'

const Dots = props => {
    const attachClass = [classes.Dots, props.newClass].join(" ");
    return (
        <div className={attachClass}>
            <span></span>
        </div>
    )
}

export default Dots
