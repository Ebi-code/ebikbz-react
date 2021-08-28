import React from 'react';
import classes from './Index.module.css';

const Multiple = props => {
    const attachClass = [classes.Multiple, props.newClass].join(" ");
    return (
        <div className={attachClass}>
            <span></span>
        </div>
    )
}

export default Multiple
