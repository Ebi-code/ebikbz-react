import React from 'react';
import classes from "./Media.module.css";

const Media = props => (
    <li className={classes.Media}>
        <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.src} alt={props.alt} />
        </a>
    </li>

);

export default Media;
