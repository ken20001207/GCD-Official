import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";
import "./Styles/App.less";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(history) => (
                            <Landing history={history} />
                        )}
                    />
                    <Route
                        path="/projects"
                        render={(history) => (
                            <Projects history={history} />
                        )}
                    />
                    <Route
                        path="/contact"
                        render={(history) => (
                            <Contact history={history} />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
