import React, { useState } from "react";
import { Col, Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import { work } from "../data";
import "../Styles/Gallary.less";

const Gallary = (props: { history: RouteComponentProps; watchingProject: work | undefined }) => {
    const [loadedImg, setLoadedImg] = useState<string[]>([]);
    const [imgNo, setImgNo] = useState(0);

    const closeGallary = () => {
        props.history.history.push("/projects/" + props.watchingProject?.class);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImgNo(imgNo === 0 ? (!props.watchingProject ? 0 : props.watchingProject.photos.length - 1) : imgNo - 1);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImgNo(imgNo + 1 === props.watchingProject?.photos.length ? 0 : imgNo + 1);
    };

    const getImgStatus = (imgUrl: string) => {
        return loadedImg.includes(imgUrl) ? "loaded" : "loading";
    };

    const imgLoadedHandler = (imgUrl: string) => {
        setLoadedImg([...loadedImg, imgUrl]);
    };

    if (props.watchingProject !== undefined) {
        const imgUrl = props.watchingProject.fileRoot + "/" + props.watchingProject.photos[imgNo];
        return (
            <div className="gallary" onClick={closeGallary}>
                <Row className="row">
                    <Col xs={2} className="flex">
                        <p onClick={prevImage}>{"<"}</p>
                    </Col>
                    <Col xs={8} className="flex">
                        <img className={getImgStatus(imgUrl)} src={imgUrl} alt={imgUrl} onLoad={() => imgLoadedHandler(imgUrl)} />
                    </Col>
                    <Col xs={2} className="flex">
                        <p onClick={nextImage}>{">"}</p>
                    </Col>
                </Row>
            </div>
        );
    } else {
        return <div />;
    }
};

export default Gallary;
