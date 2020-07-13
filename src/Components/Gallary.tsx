import React, { Component } from "react";
import { Col, Row } from "react-flexbox-grid";
import { RouteComponentProps } from "react-router-dom";
import { work } from "../data";
import "../Styles/Gallary.less";

interface Props {
    watchingProject: work | undefined;
    history: RouteComponentProps;
}

interface States {
    imgNo: number;
    loadedImg: string[];
}

export default class Gallary extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            imgNo: 1,
            loadedImg: [],
        };
    }

    closeGallary = () => {
        const { history, watchingProject } = this.props;
        history.history.push("/projects/" + watchingProject?.class);
    };

    prevImage = (e: React.MouseEvent) => {
        const { watchingProject } = this.props;
        const { imgNo } = this.state;
        e.stopPropagation();
        this.setState({
            imgNo:
                imgNo === 1
                    ? !watchingProject
                        ? 1
                        : watchingProject.photonum
                    : imgNo - 1,
        });
    };

    nextImage = (e: React.MouseEvent) => {
        const { watchingProject } = this.props;
        const { imgNo } = this.state;
        e.stopPropagation();
        this.setState({
            imgNo:
                watchingProject?.photonum === imgNo ? 1 : imgNo + 1,
        });
    };

    getImageStatus = (imgUrl: string) => {
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
        const { watchingProject } = this.props;
        const { imgNo } = this.state;
        const imgUrl =
            watchingProject?.fileRoot + "/" + imgNo + ".jpg";
        return (
            <div className="gallary" onClick={this.closeGallary}>
                <Row className="row">
                    <Col xs={2} className="flex">
                        <p onClick={this.prevImage}>{"<"}</p>
                    </Col>
                    <Col xs={8} className="flex">
                        <img
                            className={this.getImageStatus(imgUrl)}
                            src={imgUrl}
                            alt={imgUrl}
                            onLoad={() =>
                                this.imgLoadedHandler(imgUrl)
                            }
                        />
                    </Col>
                    <Col xs={2} className="flex">
                        <p onClick={this.nextImage}>{">"}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
