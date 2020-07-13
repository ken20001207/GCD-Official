import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import { classes } from "../data";

interface Props {
    history: RouteComponentProps;
}

interface States {
    windowHeight: number;
    loadedImg: string[];
}

export class LandingRow1D extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = { windowHeight: 0, loadedImg: [] };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(
            this
        );
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener(
            "resize",
            this.updateWindowDimensions
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "resize",
            this.updateWindowDimensions
        );
    }

    updateWindowDimensions() {
        this.setState({
            windowHeight: window.innerHeight,
        });
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
            <Row className="row1">
                <Col xs={3} className="col1">
                    <div className="buttons">
                        <p
                            onClick={() => {
                                window.scrollTo({
                                    top: this.state.windowHeight,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            About
                        </p>
                        <p
                            onClick={() => {
                                this.props.history.history.push(
                                    "/projects/" + classes[0].id
                                );
                            }}
                        >
                            Projects
                        </p>
                        <p
                            onClick={() => {
                                this.props.history.history.push(
                                    "/contact"
                                );
                            }}
                        >
                            Contact
                        </p>
                    </div>
                </Col>
                <Col xs={9} className="col2">
                    <img
                        className={this.getImgStatus(
                            "https://gdc-official-preview.netlify.app/images/landingbg.png"
                        )}
                        src="https://gdc-official-preview.netlify.app/images/landingbg.png"
                        alt="https://gdc-official-preview.netlify.app/images/landingbg.png"
                        onLoad={() =>
                            this.imgLoadedHandler(
                                "https://gdc-official-preview.netlify.app/images/landingbg.png"
                            )
                        }
                    />
                    <div className="logo-outer">
                        <div className="logo-inner">
                            <img
                                className={this.getImgStatus(
                                    "https://gdc-official-preview.netlify.app/images/svgs/logo.svg"
                                )}
                                src="https://gdc-official-preview.netlify.app/images/svgs/logo.svg"
                                alt="logo"
                                onLoad={() =>
                                    this.imgLoadedHandler(
                                        "https://gdc-official-preview.netlify.app/images/svgs/logo.svg"
                                    )
                                }
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export class LandingRow1M extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = { windowHeight: 0, loadedImg: [] };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener(
            "resize",
            this.updateWindowDimensions
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "resize",
            this.updateWindowDimensions
        );
    }

    updateWindowDimensions = () => {
        this.setState({
            windowHeight: window.innerHeight,
        });
    };

    render() {
        return (
            <Row className="row1 flex">
                <div className="landing-content">
                    <img
                        className="logo"
                        src="https://gdc-official-preview.netlify.app/images/svgs/logo.svg"
                        alt="logo"
                    />
                    <div className="buttons">
                        <p
                            onClick={() => {
                                window.scrollTo({
                                    top: this.state.windowHeight,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            About
                        </p>
                        <p
                            onClick={() => {
                                this.props.history.history.push(
                                    "/projects/" + classes[0].id
                                );
                            }}
                        >
                            Projects
                        </p>
                        <p
                            onClick={() => {
                                this.props.history.history.push(
                                    "/contact"
                                );
                            }}
                        >
                            Contact
                        </p>
                    </div>
                </div>
            </Row>
        );
    }
}
