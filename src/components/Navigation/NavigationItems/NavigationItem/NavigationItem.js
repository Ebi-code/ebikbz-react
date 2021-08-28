import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./NavigationItem.module.css";

const NavigationItem = props => (
    <li className={classes.NavigationItem} onClick={props.closed}>
        <NavLink
            exact={props.exact}
            activeClassName={classes.Active}
            to={props.link}>
            {props.children}
        </NavLink>
    </li>

);

export default NavigationItem;
