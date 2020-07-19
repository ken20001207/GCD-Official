import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";
import "./Styles/App.less";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Landing />} />
                <Route path="/projects" render={() => <Projects />} />
                <Route path="/contact" render={() => <Contact />} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
