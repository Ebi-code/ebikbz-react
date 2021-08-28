import React from 'react';
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
    const attachedClass = [classes.NavigationItems, props.newClass].join(" ");
    return (
        <nav className={attachedClass}>
            <ul >
                <NavigationItem closed={props.closed} exact link="/" >home</NavigationItem>
                <NavigationItem closed={props.closed} link="/skill" >skill</NavigationItem>
                <NavigationItem closed={props.closed} link="/about" >about me</NavigationItem>
                <NavigationItem closed={props.closed} link="/contact" >contact</NavigationItem>
            </ul>
        </nav>
    )
};

export default NavigationItems
