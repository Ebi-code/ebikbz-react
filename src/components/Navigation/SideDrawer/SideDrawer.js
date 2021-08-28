import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = props => {
    let sideDrawer = [classes.SideDrawer, classes.Close];
    let navigationItems = [classes.NavigationItems, classes.Hide];

    if (props.open) {
        sideDrawer = [classes.SideDrawer, classes.Open];
        navigationItems = [classes.NavigationItems, classes.Show];
    }

    return (
        <React.Fragment>
            <div className={sideDrawer.join(" ")} >
                <NavigationItems newClass={navigationItems.join(" ")} closed={props.closed} />
            </div>
        </React.Fragment>
    )
}

export default SideDrawer
