import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import Footer from "../Components/Footer";
import { HightLights } from "../data";
import "../Styles/Landing.less";

interface Props {
    history: RouteComponentProps;
}

interface States {
    windowHeight: number;
    loadedImg: string[];
}

export default class Landing extends Component<Props, States> {
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
            <div className="landing-page">
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
                                        "/projects/office"
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
                                "/images/landingbg.png"
                            )}
                            src="/images/landingbg.png"
                            alt="/images/landingbg.png"
                            onLoad={() =>
                                this.imgLoadedHandler(
                                    "/images/landingbg.png"
                                )
                            }
                        />
                        <div className="logo-outer">
                            <div className="logo-inner">
                                <img
                                    className={this.getImgStatus(
                                        "/images/logo.svg"
                                    )}
                                    src="/images/logo.svg"
                                    alt="logo"
                                    onLoad={() =>
                                        this.imgLoadedHandler(
                                            "/images/logo.svg"
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
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
                                Founded in Taiwan in 2000, GCD
                                primarily works with multinational
                                corporate offices, offering Design &
                                Build services.
                            </p>
                            <p>
                                GCD is a team of professionals
                                specializing in interior design and
                                project management that are supported
                                by its very own in-house builders and
                                construction team.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="row3">
                    <Row className="row-classes">
                        {HightLights.map((hl) => (
                            <Col xs={4}>
                                <div
                                    className="work-class"
                                    onClick={() =>
                                        this.props.history.history.push(
                                            "/projects/" +
                                                hl.class +
                                                "/" +
                                                hl.id
                                        )
                                    }
                                >
                                    <img
                                        src={hl.coverPhoto}
                                        className={this.getImgStatus(
                                            hl.coverPhoto
                                        )}
                                        alt={hl.coverPhoto}
                                        onLoad={() =>
                                            this.imgLoadedHandler(
                                                hl.coverPhoto
                                            )
                                        }
                                    />
                                    <div className="overlay">
                                        <p>{hl.name}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Row>
                <Footer />
            </div>
        );
    }
}
