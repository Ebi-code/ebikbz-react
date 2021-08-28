import React from 'react'
import classes from './Lozenge.module.css'

const Lozenge = props => {
    let attachedClass = [classes.Lozenge, props.newClass]
    return (
        <div className={attachedClass.join(" ")}>
            {props.children}
        </div>
    )
}

export default Lozenge
