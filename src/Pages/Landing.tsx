import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import Footer from "../Components/Footer";
import {
    LandingRow1D,
    LandingRow1M,
} from "../Components/LandingRow1";
import {
    LandingRow2D,
    LandingRow2M,
} from "../Components/LandingRow2";
import { HightLights } from "../data";
import "../Styles/Landing.less";

interface Props {
    history: RouteComponentProps;
}

interface States {
    windowWidth: number;
    loadedImg: string[];
}

export default class Landing extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            windowWidth: 0,
            loadedImg: [],
        };
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
            windowWidth: window.innerWidth,
        });
    };

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
        const { history } = this.props;
        const { windowWidth } = this.state;
        return (
            <div className="landing-page">
                {windowWidth >= 768 ? (
                    <LandingRow1D history={history} />
                ) : (
                    <LandingRow1M history={history} />
                )}

                {windowWidth >= 768 ? (
                    <LandingRow2D />
                ) : (
                    <LandingRow2M />
                )}

                <Row className="row3">
                    <Row className="row-classes">
                        {HightLights.map((hl) => (
                            <Col xs={12} md={6} lg={4}>
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
