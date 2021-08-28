import React from 'react'
import classes from "./SectionContainer.module.css"

const SectionContainer = props => {
    let attachedClasses = [classes.SectionContainer, props.newClass].join(" ");
    return (
        <section className={attachedClasses} id={props.id}>
            {props.children}
        </section>
    )
}

export default SectionContainer
