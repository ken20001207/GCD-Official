import React, { useState } from "react";
import { Col, Row } from "react-flexbox-grid";

export const LandingRow2D = () => {
    const [loadedImg, setLoadedImg] = useState<string[]>([]);

    const getImgStatus = (imgUrl: string) => {
        return loadedImg.includes(imgUrl) ? "loaded" : "loading";
    };

    const imgLoadedHandler = (imgUrl: string) => {
        setLoadedImg([...loadedImg, imgUrl]);
    };

    return (
        <Row className="row2">
            <Col xs={7} className="col1">
                <img
                    className={getImgStatus("/images/aboutbg.png")}
                    src="/images/aboutbg.png"
                    alt="aboutbg"
                    onLoad={() => imgLoadedHandler("/images/aboutbg.png")}
                />
            </Col>
            <Col xs={5} className="col2">
                <div className="text">
                    <h2>About Us</h2>
                    <p>
                        Founded in Taiwan in 2000, GCD primarily works with multinational corporate offices, offering Design & Build
                        services.
                    </p>
                    <p>
                        GCD is a team of professionals specializing in interior design and project management that are supported by its very
                        own in-house builders and construction team.
                    </p>
                </div>
            </Col>
        </Row>
    );
};

export const LandingRow2M = () => {
    return (
        <Row className="row2">
            <img src="/images/aboutbg.png" alt="aboutbg" />
            <div className="text">
                <h2>About Us</h2>
                <p>
                    Founded in Taiwan in 2000, GCD primarily works with multinational corporate offices, offering Design & Build services.
                </p>
                <p>
                    GCD is a team of professionals specializing in interior design and project management that are supported by its very own
                    in-house builders and construction team.
                </p>
            </div>
        </Row>
    );
};
