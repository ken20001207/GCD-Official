import React, { useState, useEffect } from "react";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { LandingRow1D, LandingRow1M } from "../Components/LandingRow1";
import { LandingRow2D, LandingRow2M } from "../Components/LandingRow2";
import { HightLights } from "../data";
import "../Styles/Landing.less";

const Landing = () => {
    const [loadedImg, setLoadedImg] = useState<string[]>([]);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
    });

    const getImgStatus = (imgUrl: string) => {
        return loadedImg.includes(imgUrl) ? "loaded" : "loading";
    };

    const imgLoadedHandler = (imgUrl: string) => {
        setLoadedImg([...loadedImg, imgUrl]);
    };

    const updateWindowDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    return (
        <div className="landing-page">
            {windowWidth >= 768 ? <LandingRow1D /> : <LandingRow1M />}
            {windowWidth >= 768 ? <LandingRow2D /> : <LandingRow2M />}
            <Row className="row3">
                <Row className="row-classes">
                    {HightLights.map((hl) => (
                        <Col xs={12} md={6} lg={4}>
                            <Link to={"/projects/" + hl.class + "/" + hl.id}>
                                <div className="work-class">
                                    <img
                                        src={hl.coverPhoto}
                                        className={getImgStatus(hl.coverPhoto)}
                                        alt={hl.coverPhoto}
                                        onLoad={() => imgLoadedHandler(hl.coverPhoto)}
                                    />
                                    <div className="overlay">
                                        <p>{hl.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Row>
            <Footer />
        </div>
    );
};

export default Landing;
