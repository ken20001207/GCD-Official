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
                <div className="landingbg">
                    <img
                        onContextMenu={(e) => e.preventDefault()}
                        className={getImgStatus("/images/landingbg.jpg")}
                        src="/images/landingbg.jpg"
                        alt="/images/landingbg.jpg"
                        onLoad={() => imgLoadedHandler("/images/landingbg.jpg")}
                    />
                </div>

                <div className="logo-outer">
                    <div className="logo-inner">
                        <img
                            onContextMenu={(e) => e.preventDefault()}
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
                <img onContextMenu={(e) => e.preventDefault()} className="logo" src="/images/svgs/logo.svg" alt="logo" />
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
