import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Styles/App.less";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={() => <Landing />} />
                    <Route path="/projects" render={() => <Projects />} />
                    <Route path="/contact" render={() => <Contact />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
