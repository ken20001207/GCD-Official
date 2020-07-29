import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import "../Styles/Contact.less";

const Contact = () => {
    return (
        <div className="contact-page">
            <Topbar />
            <div className="bg">
                <Row className="container-outer">
                    <Col className="col" xs={12} mdOffset={1} md={10}>
                        <div className="container">
                            <Row>
                                <Col xs={12} md={6}>
                                    <img
                                        onContextMenu={(e) => e.preventDefault()}
                                        className="map"
                                        src="/images/map.png"
                                        alt="/images/map.png"
                                    />
                                </Col>
                                <Col xs={12} mdOffset={1} md={5} className="right">
                                    <h4>PRIMARY CONTACTS</h4>
                                    <Row className="info-row">
                                        <Col xs={2}>
                                            <img
                                                onContextMenu={(e) => e.preventDefault()}
                                                src="/images/svgs/phone.svg"
                                                alt="/images/svgs/phone.svg"
                                            />
                                        </Col>
                                        <Col xs={10}>
                                            <p>
                                                TEL: +(8862) 2356-4560 <br />
                                                FAX: +(8862) 2362-0277
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className="info-row">
                                        <Col xs={2}>
                                            <img
                                                onContextMenu={(e) => e.preventDefault()}
                                                src="/images/svgs/mail.svg"
                                                alt="/images/svgs/mail.svg"
                                            />
                                        </Col>
                                        <Col xs={10}>
                                            <p>E-mail: gcd.intl@msa.hinet.net</p>
                                        </Col>
                                    </Row>
                                    <Row className="info-row">
                                        <Col xs={2}>
                                            <img
                                                onContextMenu={(e) => e.preventDefault()}
                                                src="/images/svgs/circle.svg"
                                                alt="/images/svgs/circle.svg"
                                            />
                                        </Col>
                                        <Col xs={10}>
                                            <p>
                                                5F., No. 20, Wenzhou St.,
                                                <br />
                                                Da’an Dist., Taipei City 106
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
