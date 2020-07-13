import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import "../Styles/Contact.less";

interface Props {
    history: RouteComponentProps;
}

interface State {
    loadedImg: string[];
}

export default class Contact extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
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
            <div className="contact-page">
                <Topbar history={this.props.history} />
                <div className="bg">
                    <img
                        src="/images/contactbg.png"
                        className={this.getImgStatus(
                            "/images/contactbg.png"
                        )}
                        alt="/images/contactbg.png"
                        onLoad={() =>
                            this.imgLoadedHandler(
                                "/images/contactbg.png"
                            )
                        }
                    />
                </div>
                <div className="container">
                    <Row>
                        <Col xs>
                            <Row className="flex companyname">
                                <p>
                                    立石室內裝修設計工程股份有限公司
                                </p>
                            </Row>
                            <img
                                className="map"
                                src="/images/map.png"
                                alt="/images/map.png"
                            />
                        </Col>
                        <Col xs className="right">
                            <h4>PRIMARY CONTACTS</h4>{" "}
                            <Row className="info-row">
                                <Col xs={2} className="central">
                                    <img src="/images/svgs/phone.svg" />
                                </Col>
                                <Col xs={10} className="central">
                                    <p>
                                        TEL: +(8862) 2356-4560 <br />
                                        FAX: +(8862) 2362-0277
                                    </p>
                                </Col>
                            </Row>
                            <Row className="info-row">
                                <Col xs={2} className="central">
                                    <img src="/images/svgs/mail.svg" />
                                </Col>
                                <Col xs={10} className="central">
                                    <p>
                                        E-mail: gcd.intl@msa.hinet.net
                                    </p>
                                </Col>
                            </Row>
                            <Row className="info-row">
                                <Col xs={2} className="central">
                                    <img src="/images/svgs/pin.svg" />
                                </Col>
                                <Col xs={10} className="central">
                                    <p>
                                        Taipei, Taiwan
                                        <br />
                                        台北市大安區溫州街20號五樓
                                    </p>
                                </Col>
                            </Row>
                            <Row className="info-row">
                                <Col
                                    xsOffset={2}
                                    xs={10}
                                    className="central"
                                >
                                    <p>
                                        Alliance: <br />
                                        SHANGHAI. SINGAPORE. HONGKONG.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}
