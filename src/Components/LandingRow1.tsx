import React, { useEffect, useState } from "react";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import { classes } from "../data";

export const LandingRow1D = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const [loadedImg, setLoadedImg] = useState<string[]>([]);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
    });

    const updateWindowDimensions = () => {
        setWindowHeight(window.outerHeight);
    };

    const getImgStatus = (imgUrl: string) => {
        return loadedImg.includes(imgUrl) ? "loaded" : "loading";
    };

    const imgLoadedHandler = (imgUrl: string) => {
        setLoadedImg([...loadedImg, imgUrl]);
    };

    return (
        <Row className="row1">
            <Col xs={3} className="col1">
                <div className="buttons">
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: windowHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        About
                    </p>
                    <Link to={"/projects/" + classes[0].id}>
                        <p>Projects</p>
                    </Link>

                    <Link to="/contact">
                        {" "}
                        <p>Contact</p>
                    </Link>
                </div>
            </Col>
            <Col xs={9} className="col2">
                <img
                    className={getImgStatus("/images/landingbg.png")}
                    src="/images/landingbg.png"
                    alt="/images/landingbg.png"
                    onLoad={() => imgLoadedHandler("/images/landingbg.png")}
                />
                <div className="logo-outer">
                    <div className="logo-inner">
                        <img
                            className={getImgStatus("/images/svgs/logo.svg")}
                            src="/images/svgs/logo.svg"
                            alt="logo"
                            onLoad={() => imgLoadedHandler("/images/svgs/logo.svg")}
                        />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export const LandingRow1M = () => {
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
    });

    const updateWindowDimensions = () => {
        setWindowHeight(window.outerHeight);
    };

    return (
        <Row className="row1 flex">
            <div className="landing-content">
                <img className="logo" src="/images/svgs/logo.svg" alt="logo" />
                <div className="buttons">
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: windowHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        About
                    </p>
                    <Link to={"/projects/" + classes[0].id}>
                        <p>Projects</p>
                    </Link>

                    <Link to="/contact">
                        {" "}
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
        </Row>
    );
};
