import React from 'react';
import classes from "./SideDrawerToggle.module.css";

const SideDrawerToggle = props => {
    let sideDrawerToggle = [classes.SideDrawerToggle, props.newClass];

    if (props.toggleOpenClose) {
        sideDrawerToggle = [classes.SideDrawerToggle, props.newClass, classes.Open];
    }

    return (
        <div className={sideDrawerToggle.join(" ")} onClick={props.clicked} >
            <div className={classes.Hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={classes.HamburgerBorder}></div>
        </div>
    )
}

export default SideDrawerToggle
