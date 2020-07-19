import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { classes } from "../data";
import "../Styles/Topbar.less";

const Topbar = () => {
    return (
        <div className="topbar">
            <Row>
                <Col xsOffset={1} xs={2} lg={1} className="flex">
                    <Link to="/">
                        <img src="/images/svgs/logo.svg" alt="logo" />
                    </Link>
                </Col>
                <Col
                    xsOffset={2}
                    lgOffset={6}
                    xs={2}
                    lg={1}
                    className="link"
                >
                    <Link to="/">
                        <p>About</p>
                    </Link>
                </Col>
                <Col xs={2} lg={1} className="link">
                    <Link to={"/projects/" + classes[0].id}>
                        <p>Projects</p>
                    </Link>
                </Col>
                <Col xs={2} lg={1} className="link">
                    <Link to="/contact">
                        <p>Contact</p>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default Topbar;
