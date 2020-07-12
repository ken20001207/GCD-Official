import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import { RouteChildrenProps } from "react-router-dom";
import "../Styles/Topbar.less";

interface Props {
    history: RouteChildrenProps;
}

export default class Topbar extends Component<Props> {
    render() {
        return (
            <div className="topbar">
                <Row>
                    <Col xsOffset={1} xs={1} className="flex">
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            onClick={() =>
                                this.props.history.history.push("/")
                            }
                        />
                    </Col>
                    <Col xsOffset={6} xs={1} className="link">
                        <p
                            onClick={() =>
                                this.props.history.history.push("/")
                            }
                        >
                            About
                        </p>
                    </Col>
                    <Col xs={1} className="link">
                        <p
                            onClick={() =>
                                this.props.history.history.push(
                                    "/projects"
                                )
                            }
                        >
                            Projects
                        </p>
                    </Col>
                    <Col xs={1} className="link">
                        <p
                            onClick={() =>
                                this.props.history.history.push(
                                    "/contact"
                                )
                            }
                        >
                            Contact
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}
