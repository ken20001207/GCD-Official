import React, { Component } from "react";
import { Col } from "react-flexbox-grid";
import { work } from "../types";

interface Props {
    work: work;
    openGallary: () => void;
}

interface States {
    imgLoaded: boolean;
}

export default class ProjectBlock extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            imgLoaded: false,
        };
    }

    render() {
        const { openGallary, work } = this.props;
        const { imgLoaded } = this.state;
        return (
            <Col xs={12} md={6} lg={4} style={{ marginBottom: 64 }}>
                <div className="work-class">
                    <div className="description flex">
                        <p>{work.name}</p>
                    </div>
                    <img
                        onContextMenu={(e) => e.preventDefault()}
                        onClick={() => openGallary()}
                        className={imgLoaded ? "loaded" : "loading"}
                        src={work.fileRoot + "/" + work.photos[0]}
                        alt={work.fileRoot + "/1.jpg"}
                        onLoad={() => {
                            this.setState({ imgLoaded: true });
                        }}
                    />
                </div>
            </Col>
        );
    }
}
