import { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import React from "react";
import "../Styles/Landing.less";

export default class Landing extends Component {
    render() {
        return (
            <div className="landing-page">
                <Row className="row1">
                    <Col xs={3} className="col1">
                        <div className="buttons">
                            <p>About</p>
                            <p>Projects</p>
                            <p>Contact</p>
                        </div>
                    </Col>
                    <Col xs={9} className="col2"></Col>
                </Row>
                <Row className="row1">
                    <Col xs={3} className="col1">
                        <div className="buttons">
                            <p>About</p>
                            <p>Projects</p>
                            <p>Contact</p>
                        </div>
                    </Col>
                    <Col xs={9} className="col2"></Col>
                </Row>
            </div>
        );
    }
}
