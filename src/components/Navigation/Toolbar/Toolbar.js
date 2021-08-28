import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";
import useWindowSize from "../../../hooks-store/useWindowSize";

const Toolbar = props => {
    const { width } = useWindowSize();
    return (
        <header className={classes.Toolbar}>
            {width <= 992 &&
                <SideDrawerToggle
                    clicked={props.toggleClicked}
                    toggleOpenClose={props.toggleOpenClose} />
            }
            {width > 992 && <NavigationItems />}
        </header>
    )
}

export default Toolbar;
