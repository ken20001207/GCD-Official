import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";

interface States {
    loadedImg: string[];
}

export class LandingRow2D extends Component<{}, States> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = { loadedImg: [] };
    }

    getImgStatus = (imgUrl: string) => {
        return this.state.loadedImg.includes(imgUrl)
            ? "loaded"
            : "loading";
    };

    imgLoadedHandler = (imgUrl: string) => {
        this.setState({
            loadedImg: [...this.state.loadedImg, imgUrl],
        });
    };

    render() {
        return (
            <Row className="row2">
                <Col xs={7} className="col1">
                    <img
                        className={this.getImgStatus(
                            "/images/aboutbg.png"
                        )}
                        src="/images/aboutbg.png"
                        alt="aboutbg"
                        onLoad={() =>
                            this.imgLoadedHandler(
                                "/images/aboutbg.png"
                            )
                        }
                    />
                </Col>
                <Col xs={5} className="col2">
                    <div className="text">
                        <h2>About Us</h2>
                        <p>
                            Founded in Taiwan in 2000, GCD primarily
                            works with multinational corporate
                            offices, offering Design & Build services.
                        </p>
                        <p>
                            GCD is a team of professionals
                            specializing in interior design and
                            project management that are supported by
                            its very own in-house builders and
                            construction team.
                        </p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export class LandingRow2M extends Component<{}, States> {
    render() {
        return (
            <Row className="row2">
                <img
                    src="https://gdc-official-preview.netlify.app/images/aboutbg.png"
                    alt="aboutbg"
                />
                <div className="text">
                    <h2>About Us</h2>
                    <p>
                        Founded in Taiwan in 2000, GCD primarily works
                        with multinational corporate offices, offering
                        Design & Build services.
                    </p>
                    <p>
                        GCD is a team of professionals specializing in
                        interior design and project management that
                        are supported by its very own in-house
                        builders and construction team.
                    </p>
                </div>
            </Row>
        );
    }
}
