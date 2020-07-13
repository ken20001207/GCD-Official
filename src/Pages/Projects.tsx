import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import {
    BrowserRouter,
    Route,
    RouteChildrenProps,
    RouteComponentProps,
} from "react-router-dom";
import Footer from "../Components/Footer";
import Gallary from "../Components/Gallary";
import ProjectBlock from "../Components/ProjectBlock";
import Topbar from "../Components/Topbar";
import { classes, work, works } from "../data";
import "../Styles/Project.less";

interface Props {
    history: RouteChildrenProps;
}

interface State {
    watchingProject: work | undefined;
    windowWidth: number;
}

export default class Projects extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingProject: undefined,
            windowWidth: 0,
        };
    }

    componentWillUnmount() {
        window.removeEventListener(
            "resize",
            this.updateWindowDimensions
        );
    }

    updateWindowDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth,
        });
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener(
            "resize",
            this.updateWindowDimensions
        );

        if (window.location.pathname.split("/")[3] !== undefined) {
            works.map((wk) => {
                if (wk.id === window.location.pathname.split("/")[3])
                    this.setState({
                        watchingProject: wk,
                    });
                return null;
            });
        }
    }

    openGallary = (history: RouteComponentProps, work: work) => {
        history.history.push(
            "/projects/" + work.class + "/" + work.id
        );
        this.setState({ watchingProject: work });
    };

    render() {
        const { history } = this.props;
        const { watchingProject, windowWidth } = this.state;
        return (
            <div>
                <div className="project-page">
                    <BrowserRouter>
                        <Topbar history={history} />
                        {windowWidth >= 768 ? (
                            <Row className="row1">
                                <Route
                                    render={(history) =>
                                        classes.map((cl) => (
                                            <Col
                                                className="col flex"
                                                xs
                                                onClick={() => {
                                                    history.history.push(
                                                        "/projects/" +
                                                            cl.id
                                                    );
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color:
                                                            history.location.pathname.split(
                                                                "/"
                                                            )[2] ===
                                                            cl.id
                                                                ? "#003CCC"
                                                                : "",
                                                    }}
                                                >
                                                    {cl.title}
                                                </p>
                                            </Col>
                                        ))
                                    }
                                />
                            </Row>
                        ) : (
                            <Row className="row1">
                                <Route
                                    render={(history) => (
                                        <select
                                            onChange={(e) =>
                                                history.history.push(
                                                    "/projects/" +
                                                        e.target.value
                                                )
                                            }
                                        >
                                            {classes.map((cl) => (
                                                <option value={cl.id}>
                                                    {cl.title}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                            </Row>
                        )}

                        <Route
                            render={(history) => (
                                <Row className="row2">
                                    {works
                                        .filter(
                                            (wk) =>
                                                wk.class ===
                                                history.location.pathname.split(
                                                    "/"
                                                )[2]
                                        )
                                        .map((wk) => (
                                            <ProjectBlock
                                                key={wk.id}
                                                openGallary={() =>
                                                    this.openGallary(
                                                        history,
                                                        wk
                                                    )
                                                }
                                                work={wk}
                                            />
                                        ))}
                                </Row>
                            )}
                        />
                        <Route
                            path="/projects/:class/:project"
                            render={(history) => (
                                <Gallary
                                    history={history}
                                    watchingProject={watchingProject}
                                />
                            )}
                        />
                    </BrowserRouter>
                </div>

                <Footer />
            </div>
        );
    }
}
