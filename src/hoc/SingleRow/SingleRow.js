import React from 'react'
import classes from "./SingleRow.module.css"

const SingleRow = props => {
    let attachedClass = [classes.SingleRow, props.newClass].join(" ")
    return (
        <div className={attachedClass} >
            {props.children}
        </div>
    )
}

export default SingleRow
