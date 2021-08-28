import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
import BackDrop from "../components/UI/BackDrop/BackDrop";
import Main from "./Main/Main";
import useWindowSize from "../hooks-store/useWindowSize";

const Layout = () => {
    const [sideDrawerShow, setSideDrawerShow] = useState(false);
    const { width } = useWindowSize();

    const drawerToggleHandler = () => {
        setSideDrawerShow(!sideDrawerShow)
    }

    const sideDrawerClose = () => {
        setSideDrawerShow(false)
    }

    return (
        <Router>
            <Toolbar toggleClicked={drawerToggleHandler} toggleOpenClose={sideDrawerShow} />
            {width <= 992 &&
                <>
                    <BackDrop show={sideDrawerShow} clicked={sideDrawerClose} />
                    <SideDrawer open={sideDrawerShow} closed={sideDrawerClose} />
                </>
            }
            <Main />
        </Router >
    )
}

export default Layout
