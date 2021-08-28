import React from 'react'
import classes from './TitleText.module.css'

const TitleText = props => {
    return (
        <h1 className={classes.TitleText}>
            <span className={classes.WhiteText}>
                {props.topTitle}
            </span>
            <span className={classes.ColoredText}>
                {props.bottomTitle}
            </span>
        </h1>
    )
}

export default TitleText
