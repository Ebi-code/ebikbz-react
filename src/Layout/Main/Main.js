import React from 'react';
import { Route, Switch } from "react-router-dom";
import classes from './Main.module.css';

import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Skills from "../../Pages/Skills/Skills";

const Main = () => {

    return (
        <main className={classes.Main}>
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/skill" component={Skills} />
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    )
}

export default Main
