import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import {
    BrowserRouter,
    Route,
    RouteChildrenProps,
} from "react-router-dom";
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import { classes, work, works } from "../data";
import "../Styles/Project.less";

interface Props {
    history: RouteChildrenProps;
}

interface State {
    watchingProject: work | undefined;
    imageNo: number;
}

export default class Projects extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingProject: undefined,
            imageNo: 1,
        };
    }

    componentDidMount() {
        if (window.location.pathname.split("/")[3] !== undefined) {
            works.map((wk) => {
                if (wk.id === window.location.pathname.split("/")[3])
                    this.setState({
                        watchingProject: wk,
                        imageNo: 1,
                    });
                return null;
            });
        }
    }

    render() {
        return (
            <div className="project-page">
                <BrowserRouter>
                    <Topbar history={this.props.history} />
                    <Route
                        render={(history) => (
                            <Row className="row1">
                                {classes.map((cl) => (
                                    <Col
                                        className="col flex"
                                        xs
                                        onClick={() => {
                                            history.history.push(
                                                "/projects/" + cl.id
                                            );
                                            this.setState({
                                                imageNo: 1,
                                            });
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    history.location.pathname.split(
                                                        "/"
                                                    )[2] === cl.id
                                                        ? "#003CCC"
                                                        : "",
                                            }}
                                        >
                                            {cl.title}
                                        </p>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    />
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
                                        <Col xs={4}>
                                            <div
                                                className="work-class"
                                                style={{
                                                    backgroundImage:
                                                        "url(" +
                                                        wk.fileRoot +
                                                        "/1.jpg)",
                                                }}
                                                onClick={() => {
                                                    history.history.push(
                                                        "/projects/" +
                                                            wk.class +
                                                            "/" +
                                                            wk.id
                                                    );
                                                    this.setState({
                                                        watchingProject: wk,
                                                    });
                                                }}
                                            >
                                                <div className="description flex">
                                                    <p>{wk.name}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                            </Row>
                        )}
                    />
                    <Route
                        path="/projects/:class/:project"
                        render={(history) => (
                            <div
                                className="workimages"
                                onClick={() => {
                                    history.history.push(
                                        "/prjects/" +
                                            this.state.watchingProject
                                                ?.class
                                    );
                                }}
                            >
                                <Row className="row3">
                                    <Col xs={2} className="flex">
                                        <p
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                this.setState({
                                                    imageNo:
                                                        this.state
                                                            .imageNo ===
                                                        1
                                                            ? !this
                                                                  .state
                                                                  .watchingProject
                                                                ? 1
                                                                : this
                                                                      .state
                                                                      .watchingProject
                                                                      .photonum
                                                            : this
                                                                  .state
                                                                  .imageNo -
                                                              1,
                                                });
                                            }}
                                        >
                                            {"<"}
                                        </p>
                                    </Col>
                                    <Col xs={8} className="flex">
                                        <img
                                            src={
                                                this.state
                                                    .watchingProject
                                                    ?.fileRoot +
                                                "/" +
                                                this.state.imageNo +
                                                ".jpg"
                                            }
                                            alt={
                                                this.state
                                                    .watchingProject
                                                    ?.fileRoot +
                                                "/" +
                                                this.state.imageNo +
                                                ".jpg"
                                            }
                                        />
                                    </Col>
                                    <Col xs={2} className="flex">
                                        <p
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                this.setState({
                                                    imageNo:
                                                        this.state
                                                            .watchingProject
                                                            ?.photonum ===
                                                        this.state
                                                            .imageNo
                                                            ? 1
                                                            : this
                                                                  .state
                                                                  .imageNo +
                                                              1,
                                                });
                                            }}
                                        >
                                            {">"}
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    />
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}
