import React from 'react'
import classes from './TitleBG.module.css'

import shape1 from '../../../assets/images/shape-1.png'
import shape2 from '../../../assets/images/shape-2.png'
import shape3 from '../../../assets/images/shape-3.png'

const TitleBG = props => {
    let attachedClass = [classes.TitleBG, props.newClass].join(" ");
    return (
        <div className={attachedClass}>
            <img className={classes.TitleShape1} src={shape1} alt="title shape" />
            <img className={classes.TitleShape2} src={shape2} alt="title shape" />
            <img className={classes.TitleShape3} src={shape3} alt="title shape" />
            <div className={classes.Text}>
                {props.children}
            </div>
        </div>
    )
}

export default TitleBG
